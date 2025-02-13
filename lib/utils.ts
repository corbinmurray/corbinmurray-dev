import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type Maze = Map<string, Set<Direction>>;
export type Cell = { x: number; y: number; intensity?: number };
export type Direction = "North" | "South" | "East" | "West";

export const cellToKey = (cell: Cell): string => `${cell.x},${cell.y}`;

export const keyToCell = (key: string): Cell => {
	const coords = key?.split(",")?.map(Number);

	return {
		x: coords[0],
		y: coords[1],
	};
};

/**
 * Generates a Maze using Wilson's loop-erased random walk (LERW) algorithm.
 * @param rows  Number of rows
 * @param cols Number of columns
 * @returns an unbiased, random, and complete Maze
 */
export const generateMaze = (rows: number, cols: number): Maze => {
	const maze: Maze = new Map();
	const visited: Set<string> = new Set();

	// Start with one cell in the maze
	const startCell: Cell = {
		x: Math.floor(Math.random() * rows),
		y: Math.floor(Math.random() * cols),
	};

	visited.add(cellToKey(startCell));
	maze.set(cellToKey(startCell), new Set());

	// Loop until all cells are visited
	while (visited.size < rows * cols) {
		let currentCell: Cell = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };

		if (visited.has(cellToKey(currentCell))) continue;

		const path: Cell[] = [currentCell];

		// Loop-erased random walk
		while (!visited.has(cellToKey(currentCell))) {
			const randomDirection = getRandomDirection();
			const nextCell: Cell = {
				x: currentCell.x + DIRECTIONS[randomDirection].dx,
				y: currentCell.y + DIRECTIONS[randomDirection].dy,
			};

			if (isValidCell(nextCell, rows, cols)) {
				currentCell = nextCell;
				const loopIndex = path.findIndex((cell) => cellToKey(cell) === cellToKey(currentCell));

				if (loopIndex !== -1) {
					path.splice(loopIndex + 1);
				} else {
					path.push(currentCell);
				}
			}
		}

		// Add the path to the maze
		for (let i = 0; i < path.length - 1; i++) {
			const current = path[i];
			const next = path[i + 1];
			const direction = Object.keys(DIRECTIONS).find(
				(d) => current.x + DIRECTIONS[d as Direction].dx === next.x && current.y + DIRECTIONS[d as Direction].dy === next.y
			) as Direction;

			const currentKey = cellToKey(current);
			const nextKey = cellToKey(next);

			if (!maze.has(currentKey)) maze.set(currentKey, new Set());
			if (!maze.has(nextKey)) maze.set(nextKey, new Set());

			maze.get(currentKey)?.add(direction);
			maze.get(nextKey)?.add(OPPOSITE_DIRECTIONS[direction]);
			visited.add(cellToKey(current));
		}

		visited.add(cellToKey(currentCell));
	}

	return maze;
};

/**
 * Gets a random Direction from all possible Direction options.
 * @returns A randomly selected Direction
 */
export const getRandomDirection = (): Direction => ["North", "South", "East", "West"][Math.floor(Math.random() * 4)] as Direction;

/**
 *
 * @param cell The cell to determine validity
 * @param width The maze's width (number of columns)
 * @param height The maze's height (number of rows)
 * @returns true if the cell is valid, else false
 */
export const isValidCell = (cell: Cell, width: number, height: number): boolean => cell.x >= 0 && cell.x < width && cell.y >= 0 && cell.y < height;

export const DIRECTIONS: Record<Direction, { dx: number; dy: number }> = {
	North: { dx: 0, dy: -1 },
	South: { dx: 0, dy: 1 },
	East: { dx: 1, dy: 0 },
	West: { dx: -1, dy: 0 },
};

export const OPPOSITE_DIRECTIONS: Record<Direction, Direction> = {
	North: "South",
	South: "North",
	East: "West",
	West: "East",
};

export const keyToCoordinates = (key: string): number[] => key?.split(",")?.map(Number);

export const getRandomStartAndGoal = (maze: Maze | null, rows: number, cols: number): { start: Cell; goal: Cell } => {
	if (!maze) {
		return {
			start: { x: 0, y: 0 },
			goal: { x: rows - 1, y: cols - 1 },
		};
	}

	const keys = Array.from(maze.keys());

	if (keys.length < 2) {
		throw new Error("The maze must have at least two cells to select a start and goal");
	}

	const startKey = keys[Math.floor(Math.random() * keys.length)];
	let goalKey = keys[Math.floor(Math.random() * keys.length)];

	while (startKey === goalKey) {
		goalKey = keys[Math.floor(Math.random() * keys.length)];
	}

	return {
		start: keyToCell(startKey),
		goal: keyToCell(goalKey),
	};
};

export const parseMazeToGraph = (maze: Maze | null): Record<string, Cell[]> => {
	const graph: Record<string, Cell[]> = {};

	if (!maze) {
		return graph;
	}

	maze.forEach((directions, cellKey) => {
		const [x, y] = cellKey.split(",").map(Number);
		graph[cellKey] = Array.from(directions).map((direction) => {
			const dx = { North: 0, South: 0, East: 1, West: -1 }[direction];
			const dy = { North: -1, South: 1, East: 0, West: 0 }[direction];

			return { x: x + dx, y: y + dy };
		});
	});

	return graph;
};

/**
 * Solves the given maze using the A* search algorithm.
 * @param graph The maze as a graph
 * @param start The starting cell
 * @param goal The target/goal cell
 * @returns The nodes visited and the final computed path
 */
export function solveMaze(graph: Record<string, Cell[]>, start: Cell, goal: Cell): { visitedNodes: Cell[]; solutionPath: Cell[] } {
	const openSet: Set<string> = new Set();
	const cameFrom: Record<string, Cell> = {};
	const gScore: Record<string, number> = {};
	const fScore: Record<string, number> = {};
	const visitedNodes: Cell[] = [];

	gScore[cellToKey(start)] = 0;
	fScore[cellToKey(start)] = heuristic(start, goal);

	openSet.add(cellToKey(start));

	while (openSet.size > 0) {
		// Get the node in openSet with the lowest fScore
		const currentKey = Array.from(openSet).reduce((a, b) => (fScore[a] < fScore[b] ? a : b));
		const currentCell = keyToCell(currentKey);

		visitedNodes.push({
			...currentCell,
			intensity: gScore[currentKey],
		});

		// If the goal is reached
		if (currentCell.x === goal.x && currentCell.y === goal.y) {
			return {
				visitedNodes,
				solutionPath: reconstructPath(cameFrom, currentCell, start),
			};
		}

		openSet.delete(currentKey);

		for (const neighbor of graph[currentKey] || []) {
			const neighborKey = cellToKey(neighbor);
			const tentativeGScore = gScore[currentKey] + 1;

			if (tentativeGScore < (gScore[neighborKey] || Infinity)) {
				cameFrom[neighborKey] = keyToCell(currentKey);
				gScore[neighborKey] = tentativeGScore;
				fScore[neighborKey] = gScore[neighborKey] + heuristic(neighbor, goal);

				if (!openSet.has(neighborKey)) {
					openSet.add(neighborKey);
				}
			}
		}
	}

	// No viable path found
	return {
		visitedNodes: [],
		solutionPath: [],
	};
}

const heuristic = (a: Cell, b: Cell): number => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

const reconstructPath = (cameFrom: Record<string, Cell>, current: Cell, start: Cell): Cell[] => {
	const path: Cell[] = [];

	while (current) {
		path.push(current);
		const parent = cameFrom[cellToKey(current)];

		if (!parent) break;

		current = parent;

		// Stop if we reach the start node
		if (current.x === start.x && current.y === start.y) {
			break;
		}
	}

	// Reverse teh path to get it from start to goal
	return path.reverse();
};
