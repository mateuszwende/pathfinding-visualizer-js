import "./assets/sass/main.scss";
import Board from "./modules/Board";
import { algorithms } from "./modules/algorithms/types";

const board = new Board("board", 25, algorithms);
board.initialize();
