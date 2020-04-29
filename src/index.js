import "./assets/sass/main.scss";
import Board from "./modules/Board";
import { dijkstra } from "./modules/algorithms/dijkstra";
import { breadthFirst } from "./modules/algorithms/breadthFirst";

const pathfindingAlgorithms = {
  dijkstra: {
    name: "Dijkstra",
    func: dijkstra,
  },
  bfs: {
    name: "Breadth-First Search",
    func: breadthFirst,
  },
};

const board = new Board("board", 25, pathfindingAlgorithms);
board.initialize();
