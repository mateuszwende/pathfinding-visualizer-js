import { NODE_TYPE } from "../node/types";
import { breadthFirst } from "./breadthFirst";
import { depthFirst } from "./depthFirst";
import { dijkstra } from "./dijkstra";
import { astar } from "./astar";

export const algorithms = {
  bfs: {
    name: "Breadth-First Search",
    func: breadthFirst,
    node: {
      type: NODE_TYPE.NORMAL,
      initialValues: {
        status: "block",
        prevId: null,
        dist: Infinity,
      },
    },
  },
  dfs: {
    name: "Depth-First Search",
    func: depthFirst,
    node: {
      type: NODE_TYPE.NORMAL,
      initialValues: {
        status: "block",
        prevId: null,
        dist: Infinity,
      },
    },
  },
  dijkstra: {
    name: "Dijkstra",
    func: dijkstra,
    node: {
      type: NODE_TYPE.WEIGHTED,
      initialValues: {
        status: "block",
        prevId: null,
        dist: Infinity,
        direction: null,
      },
    },
  },
  astar: {
    name: "A* Search",
    func: astar,
    node: {
      type: NODE_TYPE.HEURISTIC,
      initialValues: {
        status: "block",
        prevId: null,
        dist: Infinity,
        direction: null,
        heuristicDistance: null,
      },
    },
  },
};
