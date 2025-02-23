"use client";

import { Button } from "@/components/ui/button";
import { useWindowSize } from "@/hooks/useWindowSize";
import { type Cell, cn, type Direction, generateMaze, getRandomStartAndGoal, type Maze as MazeType, parseMazeToGraph, solveMaze } from "@/lib/utils";
import * as d3 from "d3";
import { Home, MapPin } from "lucide-react";
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
	 * Handles showing the solved maze. Starts with showing the algorithm's 'thought process' (steps taken to find the solution path), then shows the solution path.
	 */
	const handleSolveMaze = () => {
		setIsLoading(true);

		const svg = d3.select(svgRef.current);
		svg.selectAll(".marker-class-solution, .marker-class-visited").remove();

		const intensityValues = visitedNodes.map((x) => x.intensity).filter((i): i is number => i !== undefined);
		const minIntensity = Math.min(...intensityValues);
		const maxIntensity = Math.max(...intensityValues);

		// Enhanced color scale for visited nodes
		const colorScale = d3
			.scaleLinear<string>()
			.domain([minIntensity, minIntensity + (maxIntensity - minIntensity) / 2, maxIntensity])
			.range(["fill-destructive/40", "fill-warning/40", "fill-success/40"]);

		// Animate visited nodes one at a time
		const animateVisitedNode = (index: number) => {
			if (index >= visitedNodes.length) {
				// Start solution path animation after all nodes are visited
				animateSolutionPath();
				return;
			}

			const node = visitedNodes[index];
			if ((node.x === startingCell?.x && node.y === startingCell?.y) || (node.x === goalCell?.x && node.y === goalCell?.y)) {
				animateVisitedNode(index + 1);
				return;
			}

			const { x, y, intensity } = node;
			const nodeDelay = calculateDelay(rows, cols, solveSpeed);

			// Create expanding ring effect
			svg
				.append("circle")
				.attr("cx", x * cellSize + cellSize / 2)
				.attr("cy", y * cellSize + cellSize / 2)
				.attr("r", cellSize * 0.1)
				.attr("class", cn("marker-class-visited", colorScale(intensity ?? minIntensity)))
				.attr("opacity", 0)
				.transition()
				.duration(200)
				.attr("r", cellSize * 0.4)
				.attr("opacity", 1)
				.transition()
				.duration(200)
				.attr("r", cellSize * 0.3);

			// Create node marker
			svg
				.append("rect")
				.attr("x", x * cellSize + cellSize / 2)
				.attr("y", y * cellSize + cellSize / 2)
				.attr("width", 0)
				.attr("height", 0)
				.attr("class", cn("marker-class-visited", colorScale(intensity ?? minIntensity)))
				.transition()
				.duration(300)
				.attr("x", x * cellSize + cellSize / 2 - (cellSize * 0.3) / 2)
				.attr("y", y * cellSize + cellSize / 2 - (cellSize * 0.3) / 2)
				.attr("width", cellSize * 0.3)
				.attr("height", cellSize * 0.3)
				.attr("rx", cellSize * 0.15)
				.attr("opacity", 1);

			// Schedule next node animation
			setTimeout(() => animateVisitedNode(index + 1), nodeDelay);
		};

		// Function to animate the solution path
		const animateSolutionPath = () => {
			// Fade out visited nodes gradually
			svg.selectAll(".marker-class-visited").transition().duration(1000).attr("opacity", 0.2);

			// Animate solution path nodes one at a time
			const animateSolutionNode = (index: number) => {
				if (index >= solutionPath.length) {
					// Clean up and finish animation
					svg.selectAll(".marker-class-visited").transition().duration(500).attr("opacity", 0).remove();
					setIsLoading(false);
					return;
				}

				const node = solutionPath[index];
				if ((node.x === startingCell?.x && node.y === startingCell?.y) || (node.x === goalCell?.x && node.y === goalCell?.y)) {
					animateSolutionNode(index + 1);
					return;
				}

				const { x, y } = node;
				const nodeDelay = calculateDelay(rows, cols, solveSpeed);

				// Create trailing glow effect
				svg
					.append("circle")
					.attr("cx", x * cellSize + cellSize / 2)
					.attr("cy", y * cellSize + cellSize / 2)
					.attr("r", cellSize * 0.4)
					.attr("class", "marker-class-solution fill-success/10 blur-sm")
					.attr("opacity", 0)
					.transition()
					.duration(300)
					.attr("opacity", 1);

				// Create solution node
				svg
					.append("rect")
					.attr("x", x * cellSize + cellSize / 2)
					.attr("y", y * cellSize + cellSize / 2)
					.attr("width", 0)
					.attr("height", 0)
					.attr("class", "marker-class-solution fill-success")
					.transition()
					.duration(300)
					.attr("x", x * cellSize + cellSize / 2 - (cellSize * 0.3) / 2)
					.attr("y", y * cellSize + cellSize / 2 - (cellSize * 0.3) / 2)
					.attr("width", cellSize * 0.3)
					.attr("height", cellSize * 0.3)
					.attr("rx", cellSize * 0.15)
					.attr("opacity", 0.6)
					.transition()
					.duration(200)
					.attr("opacity", 0.8);

				// Add connecting line to previous node if not first node
				if (index > 0) {
					const prevNode = solutionPath[index - 1];
					svg
						.append("line")
						.attr("x1", prevNode.x * cellSize + cellSize / 2)
						.attr("y1", prevNode.y * cellSize + cellSize / 2)
						.attr("x2", x * cellSize + cellSize / 2)
						.attr("y2", y * cellSize + cellSize / 2)
						.attr("class", "marker-class-solution stroke-success/40")
						.attr("stroke-width", 2)
						.attr("opacity", 0)
						.attr("stroke-dasharray", cellSize)
						.attr("stroke-dashoffset", cellSize)
						.transition()
						.duration(300)
						.attr("opacity", 1)
						.attr("stroke-dashoffset", 0);

					// Remove visited nodes that are part of the solution path
					svg
						.selectAll(".marker-class-visited")
						.filter(function () {
							const element = d3.select(this);
							const nodeX = (parseFloat(element.attr("x")) + (cellSize * 0.3) / 2) / cellSize;
							const nodeY = (parseFloat(element.attr("y")) + (cellSize * 0.3) / 2) / cellSize;
							return Math.abs(nodeX - x) < 0.1 && Math.abs(nodeY - y) < 0.1;
						})
						.transition()
						.duration(300)
						.attr("opacity", 0)
						.remove();
				}

				// Schedule next solution node animation
				setTimeout(() => animateSolutionNode(index + 1), nodeDelay);
			};

			// Start solution path animation
			animateSolutionNode(0);
		};

		// Start the visited nodes animation
		animateVisitedNode(0);
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
					<Home className="w-4 h-4 text-primary" aria-label="Start" />
					<span className="text-sm md:text-lg">Start</span>
				</div>
				<div className="flex items-center gap-2">
					<MapPin className="w-4 h-4 text-secondary" aria-label="Goal" />
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

		// Home icon path data
		group
			.append("path")
			.attr("d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10")
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

		// MapPin icon path data
		group
			.append("path")
			.attr("d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z")
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
