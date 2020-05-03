import "./assets/sass/main.scss";
import Board from "./modules/Board";
import { algorithms } from "./modules/algorithms/types";

const board = new Board({
  boardId: "board",
  blockSize: 25,
  speed: 40,
  algorithms,
  initialAlgorithm: algorithms["bfs"],
});
board.initialize();
