import { Button } from "@repo/ui/components/button";
import { useWindowSize } from "@repo/ui/hooks/useWindowSize";
import { type Cell, cn, type Direction, generateMaze, getRandomStartAndGoal, type Maze as MazeType, parseMazeToGraph, solveMaze } from "@repo/ui/lib/utils";
import * as d3 from "d3";
import { type ChangeEvent, type RefObject, useEffect, useRef, useState } from "react";

/**
 * Component for displaying the maze and displaying the A* algorithm in real-time. The component is self-responsive for device widths
 *
 * @component
 * @example
 * return (
 * 	<Maze className="w-full h-full" />
 * )
 */
const Maze = ({ className }: { className?: string }) => {
	const DEFAULT_SOLVE_SPEED = 50;

	const { width } = useWindowSize();

	// Responsive configuration
	const config = {
		sm: { rows: 10, cols: 10, cellSize: 50 },
		md: { rows: 20, cols: 20, cellSize: 25 },
		// lg: { rows: 30, cols: 30, cellSize: 18.75 },
		// xl: { rows: 30, cols: 30, cellSize: 18.75 },
	};

	// Determine the current configuration
	const { rows, cols, cellSize } = width < 640 ? config.sm : width < 768 ? config.md : config.md;

	const svgRef = useRef<SVGSVGElement | null>(null);

	const [maze, setMaze] = useState<MazeType | null>(null);
	const [startingCell, setStartingCell] = useState<Cell | null>(null);
	const [goalCell, setGoalCell] = useState<Cell | null>(null);
	const [visitedNodes, setVisitedNodes] = useState<Cell[]>([]);
	const [solutionPath, setSolutionPath] = useState<Cell[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [solveSpeed, setSolveSpeed] = useState(DEFAULT_SOLVE_SPEED);
	const [solveAnimationTimeInSeconds, setSolveAnimationTimeInSeconds] = useState(0);

	// Generate maze
	useEffect(() => {
		const generatedMaze = generateMaze(rows, cols);
		const { start, goal } = getRandomStartAndGoal(generatedMaze, rows, cols);
		const graph = parseMazeToGraph(generatedMaze);
		const { solutionPath, visitedNodes } = solveMaze(graph, start, goal);

		setMaze(generatedMaze);
		setStartingCell(start);
		setGoalCell(goal);
		setVisitedNodes(visitedNodes);
		setSolutionPath(solutionPath);
	}, [rows, cols]);

	// Draw the maze
	useEffect(() => {
		const svg = d3.select(svgRef.current);
		svg.selectAll("*").remove();

		// Draw initial maze
		maze?.forEach((directions, cellKey) => {
			const [x, y] = cellKey.split(",").map(Number);

			drawMazeCell(
				svgRef,
				{ x, y } as Cell,
				cellSize,
				directions,
				{
					currentCellClassName: "stroke-foreground",
					goalCellClassName: "fill-destructive",
					startCellClassName: "fill-success",
				},
				startingCell,
				goalCell
			);
		});
	}, [maze, cellSize, goalCell, startingCell]);

	// Track solve animation time
	useEffect(() => {
		const totalTimeToAnimateSolutionInSeconds = Math.round(((visitedNodes.length + solutionPath.length) * calculateDelay(rows, cols, solveSpeed)) / 1000);

		setSolveAnimationTimeInSeconds(totalTimeToAnimateSolutionInSeconds);
	}, [solveSpeed, rows, cols, visitedNodes, solutionPath]);

	/**
	 * Handles showing the solved maze. Starts with showing the algorithm's 'thought process' (steps taken to find the 	solution path), then shows the solution path.
	 */
	const handleSolveMaze = () => {
		setIsLoading(true);

		const intensities = visitedNodes.map((x) => x.intensity ?? 0);
		const minIntensity = Math.min(...intensities);
		const maxIntensity = Math.max(...intensities);

		console.log(intensities);

		console.log("Min Intensity:", minIntensity, "Max Intensity:", maxIntensity);

		const colorScale = d3
			.scaleLinear<string>()
			.domain([minIntensity, minIntensity + (maxIntensity - minIntensity) / 2, maxIntensity])
			.range(["fill-destructive", "fill-warning", "fill-success"]);

		const svg = d3.select(svgRef.current);
		svg.selectAll(".fill-warning").remove();
		svg.selectAll(".fill-secondary").remove();

		// Animate visited nodes
		visitedNodes.forEach((node, index) => {
			const { x, y, intensity } = node;

			console.log(`Node at (${node.x}, ${node.y}), Intensity: ${node.intensity}, Class: ${colorScale(node.intensity ?? 0)}`);

			svg
				.append("circle")
				.attr("cx", x * cellSize + cellSize / 2)
				.attr("cy", y * cellSize + cellSize / 2)
				.attr("r", cellSize / 6)
				.attr("fill", "currentColor")
				.attr("class", "marker-class-visited fill-warning")
				.attr("opacity", 0)
				.transition()
				.delay(index * calculateDelay(rows, cols, solveSpeed)) // Delay each node for sequential animation
				.duration(200)
				.attr("opacity", 1);
		});

		// Erase visited nodes and animate solution path after delay
		const totalVisitedTime = visitedNodes.length * calculateDelay(rows, cols, solveSpeed);

		setTimeout(() => {
			svg.selectAll(".marker-class-visited").remove();

			solutionPath.forEach((node, index) => {
				const { x, y } = node;

				svg
					.append("circle")
					.attr("cx", x * cellSize + cellSize / 2)
					.attr("cy", y * cellSize + cellSize / 2)
					.attr("r", cellSize / 6)
					.attr("fill", "currentColor")
					.attr("class", "fill-secondary shadow")
					.attr("opacity", 0)
					.transition()
					.delay(index * calculateDelay(rows, cols, solveSpeed)) // Delay each path node for sequential animation
					.duration(150)
					.attr("opacity", 1);
			});
		}, totalVisitedTime);

		setTimeout(
			() => {
				setIsLoading(false);
			},
			totalVisitedTime + solutionPath.length * calculateDelay(rows, cols, solveSpeed)
		);
	};

	/**
	 * Handles generating a new maze, start, goal, solutionPath, and visitedNodes
	 */
	const handleGenerateNewMaze = () => {
		setIsLoading(true);

		const generatedMaze = generateMaze(rows, cols);
		const { start, goal } = getRandomStartAndGoal(generatedMaze, rows, cols);
		const graph = parseMazeToGraph(generatedMaze);
		const { solutionPath, visitedNodes } = solveMaze(graph, start, goal);

		setMaze(generatedMaze);
		setStartingCell(start);
		setGoalCell(goal);
		setVisitedNodes(visitedNodes);
		setSolutionPath(solutionPath);
		setSolveSpeed(DEFAULT_SOLVE_SPEED);
		setIsLoading(false);
	};

	/**
	 * Handles updating the animation delay
	 * @param e The change event
	 */
	const handleDelayChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setSolveSpeed(Number.parseInt(e.currentTarget.value));
	};

	return (
		<div className="flex flex-col gap-6 md:gap-8 w-full h-full">
			{/* Legend */}
			<div className="flex flex-row justify-center items-center gap-4 md:gap-8">
				<div className="flex items-center gap-2">
					<div className="w-4 h-4 rounded-full bg-success" aria-label="Start"></div>
					<span className="text-sm md:text-lg">Start</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="w-4 h-4 rounded-full bg-destructive" aria-label="Goal"></div>
					<span className="text-sm md:text-lg">Goal</span>
				</div>
			</div>

			<svg ref={svgRef} className={cn(className)} viewBox="0 0 500 500" />

			<div className="flex flex-row justify-center gap-12">
				<Button disabled={isLoading} onClick={handleGenerateNewMaze}>
					Generate New Maze
				</Button>
				<Button variant="secondary" disabled={isLoading || !maze || !visitedNodes || !solutionPath} onClick={handleSolveMaze}>
					Solve Maze
				</Button>
			</div>

			<div className="flex flex-col justify-start gap-y-2">
				<label htmlFor="delaySlider">
					Solve animation speed ({solveAnimationTimeInSeconds < 1 ? "<1" : solveAnimationTimeInSeconds}
					{solveAnimationTimeInSeconds <= 1 ? " second" : " seconds"})
				</label>
				<input name="delaySlider" type="range" min={1} max="100" className="range" onChange={handleDelayChange} value={solveSpeed} disabled={isLoading} />
			</div>
		</div>
	);
};

export default Maze;

const drawMazeCell = (
	svgRef: RefObject<SVGSVGElement | null>,
	currentCell: Cell,
	cellSize: number,
	directions: Set<Direction>,
	{ currentCellClassName, startCellClassName, goalCellClassName }: { currentCellClassName: string; startCellClassName: string; goalCellClassName: string },
	startCell: Cell | null = null,
	goalCell: Cell | null = null
): void => {
	if (!svgRef) {
		return;
	}

	const svg = d3.select(svgRef.current);
	const { x, y } = currentCell;

	// start and goal cells
	if (x === startCell?.x && y === startCell?.y) {
		const circleSize = cellSize * 0.6;
		const offset = (cellSize - circleSize) / 2;

		svg
			.append("rect")
			.attr("x", startCell.x * cellSize + offset)
			.attr("y", startCell.y * cellSize + offset)
			.attr("width", circleSize)
			.attr("height", circleSize)
			.attr("rx", circleSize / 2)
			.attr("ry", circleSize / 2)
			.attr("fill", "currentColor")
			.attr("class", startCellClassName);
	}

	if (x === goalCell?.x && y === goalCell?.y) {
		const circleSize = cellSize * 0.6;
		const offset = (cellSize - circleSize) / 2;

		svg
			.append("rect")
			.attr("x", goalCell.x * cellSize + offset)
			.attr("y", goalCell.y * cellSize + offset)
			.attr("width", circleSize)
			.attr("height", circleSize)
			.attr("rx", circleSize / 2)
			.attr("ry", circleSize / 2)
			.attr("fill", "currentColor")
			.attr("class", goalCellClassName);
	}

	if (!directions.has("North")) {
		svg
			.append("line")
			.attr("x1", x * cellSize)
			.attr("y1", y * cellSize)
			.attr("x2", (x + 1) * cellSize)
			.attr("y2", y * cellSize)
			.attr("class", currentCellClassName);
	}

	if (!directions.has("South")) {
		svg
			.append("line")
			.attr("x1", x * cellSize)
			.attr("y1", (y + 1) * cellSize)
			.attr("x2", (x + 1) * cellSize)
			.attr("y2", (y + 1) * cellSize)
			.attr("class", currentCellClassName);
	}

	if (!directions.has("East")) {
		svg
			.append("line")
			.attr("x1", (x + 1) * cellSize)
			.attr("y1", y * cellSize)
			.attr("x2", (x + 1) * cellSize)
			.attr("y2", (y + 1) * cellSize)
			.attr("class", currentCellClassName);
	}

	if (!directions.has("West")) {
		svg
			.append("line")
			.attr("x1", x * cellSize)
			.attr("y1", y * cellSize)
			.attr("x2", x * cellSize)
			.attr("y2", (y + 1) * cellSize)
			.attr("class", currentCellClassName);
	}
};

/**
 * Calculates the delay to be used for animating the solved maze. The function is inverse, the larger the maze (area [rows x cols]) the smaller the delay.
 * The delay is constrained within reasonable bounds using min and max values.
 *
 * @param rows Number of rows in the maze
 * @param cols Number of columns in the maze
 * @param solveSpeed A multiplier to control the overall speed of the solving animation
 * @returns A delay (in milliseconds) within the specified range
 */
const calculateDelay = (rows: number, cols: number, solveSpeed: number): number => {
	const area = rows * cols;
	const baseDelay = 100000;

	// Calculate initial delay
	return baseDelay / (Math.sqrt(area) * solveSpeed * 2);
};
