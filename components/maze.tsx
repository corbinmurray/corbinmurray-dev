"use client";

import { Button } from "@/components/ui/button";
import { useWindowSize } from "@/hooks/useWindowSize";
import { type Cell, cn, type Direction, generateMaze, getRandomStartAndGoal, type Maze as MazeType, parseMazeToGraph, solveMaze } from "@/lib/utils";
import * as d3 from "d3";
import { Flag, Target } from "lucide-react";
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

			drawMazeCell(svgRef, { x, y } as Cell, cellSize, directions, startingCell, goalCell);
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

		const svg = d3.select(svgRef.current);
		svg.selectAll(".marker-class-solution").remove();

		const intensityValues = visitedNodes.map((x) => x.intensity).filter((i): i is number => i !== undefined); // TypeScript narrowing

		const minIntensity = Math.min(...intensityValues);
		const maxIntensity = Math.max(...intensityValues);

		const colorScale = d3
			.scaleQuantize<string>()
			.domain([minIntensity, minIntensity + (maxIntensity - minIntensity) / 2, maxIntensity])
			.range(["fill-destructive", "fill-warning", "fill-success"]);

		// Animate visited nodes
		visitedNodes
			.filter((node) => !(node.x === startingCell?.x && node.y === startingCell?.y) && !(node.x === goalCell?.x && node.y === goalCell?.y))
			.forEach((node, index) => {
				const { x, y, intensity } = node;

				svg
					.append("rect")
					.attr("x", x * cellSize + cellSize / 2)
					.attr("y", y * cellSize + cellSize / 2)
					.attr("width", 0)
					.attr("height", 0)
					.attr("class", cn("marker-class-visited transition-all duration-200 ease-out", colorScale(intensity ?? minIntensity)))
					.attr("opacity", 0)
					.transition()
					.delay(index * calculateDelay(rows, cols, solveSpeed))
					.duration(200)
					.transition()
					.ease(d3.easeBackOut)
					.attr("x", x * cellSize + cellSize / 2 - (cellSize * 0.5) / 2)
					.attr("y", y * cellSize + cellSize / 2 - (cellSize * 0.5) / 2)
					.attr("width", cellSize * 0.5)
					.attr("height", cellSize * 0.5)
					.attr("rx", cellSize * 0.15)
					.attr("ry", cellSize * 0.15)
					.attr("opacity", 1);
			});

		// Erase visited nodes and animate solution path after delay
		const totalVisitedTime = visitedNodes.length * calculateDelay(rows, cols, solveSpeed);

		setTimeout(() => {
			svg.selectAll(".marker-class-visited").remove();

			solutionPath
				.filter((node) => !(node.x === startingCell?.x && node.y === startingCell?.y) && !(node.x === goalCell?.x && node.y === goalCell?.y))
				.forEach((node, index) => {
					const { x, y } = node;

					svg
						.append("rect")
						.attr("x", x * cellSize + cellSize / 2)
						.attr("y", y * cellSize + cellSize / 2)
						.attr("width", 0)
						.attr("height", 0)
						.attr("fill", "currentColor")
						.attr("class", "marker-class-solution fill-success transition-all duration-200 ease-out")
						.attr("opacity", 0)
						.transition()
						.delay(index * calculateDelay(rows, cols, solveSpeed))
						.duration(200)
						.transition()
						.ease(d3.easeBackOut)
						.attr("x", x * cellSize + cellSize / 2 - (cellSize * 0.5) / 2)
						.attr("y", y * cellSize + cellSize / 2 - (cellSize * 0.5) / 2)
						.attr("width", cellSize * 0.5)
						.attr("height", cellSize * 0.5)
						.attr("rx", cellSize * 0.15)
						.attr("ry", cellSize * 0.15)
						.attr("opacity", 1);
				});
		}, totalVisitedTime);

		setTimeout(() => {
			setIsLoading(false);
		}, totalVisitedTime + solutionPath.length * calculateDelay(rows, cols, solveSpeed));
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
					<Flag className="w-4 h-4 text-primary" aria-label="Start" />
					<span className="text-sm md:text-lg">Start</span>
				</div>
				<div className="flex items-center gap-2">
					<Target className="w-4 h-4 text-secondary" aria-label="Goal" />
					<span className="text-sm md:text-lg">Goal</span>
				</div>
			</div>

			<svg ref={svgRef} className={cn(className)} viewBox="0 0 500 500" />

			<div className="flex flex-col justify-start gap-y-2">
				<label htmlFor="delaySlider">
					Solve animation speed ({solveAnimationTimeInSeconds < 1 ? "<1" : solveAnimationTimeInSeconds}
					{solveAnimationTimeInSeconds <= 1 ? " second" : " seconds"})
				</label>
				<input name="delaySlider" type="range" min={1} max="100" className="range" onChange={handleDelayChange} value={solveSpeed} disabled={isLoading} />
			</div>

			<div className="flex flex-row justify-center gap-12">
				<Button disabled={isLoading} onClick={handleGenerateNewMaze}>
					Generate New Maze
				</Button>
				<Button variant="secondary" disabled={isLoading} onClick={handleSolveMaze}>
					Solve Maze
				</Button>
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
	startCell: Cell | null = null,
	goalCell: Cell | null = null
): void => {
	if (!svgRef) {
		return;
	}

	const emptyCellClass = cn("stroke-foreground");
	const svg = d3.select(svgRef.current);
	const { x, y } = currentCell;

	// start and goal cells
	if (x === startCell?.x && y === startCell?.y) {
		const iconSize = cellSize * 0.7; // Slightly larger
		const centerX = startCell.x * cellSize + cellSize / 2;
		const centerY = startCell.y * cellSize + cellSize / 2;

		// Create a group for the icon
		const group = svg
			.append("g")
			.attr("transform", `translate(${centerX - iconSize / 2}, ${centerY - iconSize / 2})`)
			.attr("class", "transition-colors duration-300");

		// Add glow effect
		group
			.append("circle")
			.attr("cx", iconSize / 2)
			.attr("cy", iconSize / 2)
			.attr("r", iconSize / 2)
			.attr("class", "fill-primary/10 dark:fill-primary/20")
			.attr("filter", "blur(4px)");

		// Flag icon path data
		group
			.append("path")
			.attr("d", "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7")
			.attr("stroke", "currentColor")
			.attr("stroke-width", "2")
			.attr("stroke-linecap", "round")
			.attr("stroke-linejoin", "round")
			.attr("class", "stroke-primary fill-primary/20")
			.attr("width", iconSize)
			.attr("height", iconSize)
			.attr("transform", `scale(${iconSize / 24})`);
	}

	if (x === goalCell?.x && y === goalCell?.y) {
		const iconSize = cellSize * 0.7; // Slightly larger
		const centerX = goalCell.x * cellSize + cellSize / 2;
		const centerY = goalCell.y * cellSize + cellSize / 2;

		// Create a group for the icon
		const group = svg
			.append("g")
			.attr("transform", `translate(${centerX - iconSize / 2}, ${centerY - iconSize / 2})`)
			.attr("class", "transition-colors duration-300");

		// Add glow effect
		group
			.append("circle")
			.attr("cx", iconSize / 2)
			.attr("cy", iconSize / 2)
			.attr("r", iconSize / 2)
			.attr("class", "fill-secondary/10 dark:fill-secondary/20")
			.attr("filter", "blur(4px)");

		// Target icon path data
		group
			.append("path")
			.attr(
				"d",
				"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 18c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z M12 14c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"
			)
			.attr("stroke", "currentColor")
			.attr("stroke-width", "2")
			.attr("stroke-linecap", "round")
			.attr("stroke-linejoin", "round")
			.attr("class", "stroke-secondary fill-secondary/20")
			.attr("width", iconSize)
			.attr("height", iconSize)
			.attr("transform", `scale(${iconSize / 24})`);
	}

	if (!directions.has("North")) {
		svg
			.append("line")
			.attr("x1", x * cellSize)
			.attr("y1", y * cellSize)
			.attr("x2", (x + 1) * cellSize)
			.attr("y2", y * cellSize)
			.attr("class", emptyCellClass);
	}

	if (!directions.has("South")) {
		svg
			.append("line")
			.attr("x1", x * cellSize)
			.attr("y1", (y + 1) * cellSize)
			.attr("x2", (x + 1) * cellSize)
			.attr("y2", (y + 1) * cellSize)
			.attr("class", emptyCellClass);
	}

	if (!directions.has("East")) {
		svg
			.append("line")
			.attr("x1", (x + 1) * cellSize)
			.attr("y1", y * cellSize)
			.attr("x2", (x + 1) * cellSize)
			.attr("y2", (y + 1) * cellSize)
			.attr("class", emptyCellClass);
	}

	if (!directions.has("West")) {
		svg
			.append("line")
			.attr("x1", x * cellSize)
			.attr("y1", y * cellSize)
			.attr("x2", x * cellSize)
			.attr("y2", (y + 1) * cellSize)
			.attr("class", emptyCellClass);
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
