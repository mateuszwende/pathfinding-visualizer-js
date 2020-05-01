import "./assets/sass/main.scss";
import Board from "./modules/Board";
import { dijkstra } from "./modules/algorithms/dijkstra";
import { breadthFirst } from "./modules/algorithms/breadthFirst";
import { depthFirst } from "./modules/algorithms/depthFirst";
import { astar } from "./modules/algorithms/astar";

const pathfindingAlgorithms = {
  dijkstra: {
    name: "Dijkstra",
    func: dijkstra,
  },
  bfs: {
    name: "Breadth-First Search",
    func: breadthFirst,
  },
  dfs: {
    name: "Depth-First Search",
    func: depthFirst,
  },
  astar: {
    name: "A* Search",
    func: astar,
  },
};

const board = new Board("board", 25, pathfindingAlgorithms);
board.initialize();
