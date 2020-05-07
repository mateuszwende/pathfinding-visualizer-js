import NodeFactory from "./NodeFactory";
import { NODE_STATUS } from "./types";

export const createNode = (x, y, algorithm) => {
  const newNode = NodeFactory.createNode(algorithm.node.type, {
    x,
    y,
    ...algorithm.node.initialValues,
  });
  return newNode;
};

export const isNodeUnvisited = (node) => node.status === NODE_STATUS.UNVISITED;
export const isNodeWall = (node) => node.status === NODE_STATUS.WALL;
export const isNodeStart = (node) => node.status === NODE_STATUS.START;
export const isNodeEnd = (node) => node.status === NODE_STATUS.END;
