import { isNodeWall } from "../../node/operations";

/**
 * Get node neighbors's ids
 */
export const getNeighborsIds = (unvisitedNodesIds, nodes, x, y) => {
  let arr = [];
  if (nodes[`${x}-${y + 1}`] && !isNodeWall(nodes[`${x}-${y + 1}`])) {
    arr.push(`${x}-${y + 1}`);
  }
  if (nodes[`${x + 1}-${y}`] && !isNodeWall(nodes[`${x + 1}-${y}`])) {
    arr.push(`${x + 1}-${y}`);
  }
  if (nodes[`${x}-${y - 1}`] && !isNodeWall(nodes[`${x}-${y - 1}`])) {
    arr.push(`${x}-${y - 1}`);
  }
  if (nodes[`${x - 1}-${y}`] && !isNodeWall(nodes[`${x - 1}-${y}`])) {
    arr.push(`${x - 1}-${y}`);
  }

  return arr.filter((potentialNeighborId) =>
    unvisitedNodesIds.find((nodeId) => potentialNeighborId === nodeId)
  );
};
