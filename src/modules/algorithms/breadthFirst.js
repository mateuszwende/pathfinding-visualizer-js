import { getNeighborsIds } from "./helpers/neighbors";
import { getClosestNode, isSameNode } from "./helpers/nodes";
import { NODE_STATUS } from "../node/types";
import { createPath } from "./helpers/createPath";

export const breadthFirst = (nodes, start, end) => {
  let unvisitedNodesIds = Object.keys(nodes);
  let visitedNodes = {};
  let nodesToAnimate = [];
  let foundEnd = false;

  while (unvisitedNodesIds.length) {
    const currNode = getClosestNode(unvisitedNodesIds, nodes);
    if (!currNode) break;

    currNode.status = NODE_STATUS.VISITED;
    visitedNodes[currNode.id] = currNode;
    nodesToAnimate.push(currNode);

    if (isSameNode(currNode, end)) {
      foundEnd = true;
      break;
    }

    const neighborsIds = getNeighborsIds(
      unvisitedNodesIds,
      nodes,
      currNode.x,
      currNode.y
    );

    neighborsIds.forEach((neighborId) => {
      visitedNodes[neighborId] = nodes[neighborId];
      nodes[neighborId].status = NODE_STATUS.NEIGHBOR;
      nodesToAnimate.push(nodes[neighborId]);

      const isNeighborFurtherFromStart = currNode.dist < nodes[neighborId].dist;

      if (isNeighborFurtherFromStart) {
        nodes[neighborId].dist = currNode.dist + 1;
        nodes[neighborId].prevId = currNode.id;
      }
    });
  }

  return [nodesToAnimate, createPath(visitedNodes, start, end, foundEnd)];
};
