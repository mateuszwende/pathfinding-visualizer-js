import { getDistanceBetweenNodes, getNodeDirection } from "./helpers/weighted";
import { getNeighborsIds } from "./helpers/neighbors";
import { getClosestNode, isSameNode } from "./helpers/nodes";
import { createPath } from "./helpers/createPath";
import { NODE_STATUS } from "../node/types";

export const dijkstra = async (nodes, start, end, speed) => {
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

      const distanceBetweenNodes = getDistanceBetweenNodes(
        currNode,
        nodes[neighborId]
      );

      const isNeighborFurtherFromStart =
        currNode.dist + distanceBetweenNodes < nodes[neighborId].dist;

      if (isNeighborFurtherFromStart) {
        nodes[neighborId].dist = currNode.dist + distanceBetweenNodes;
        nodes[neighborId].prevId = currNode.id;
        nodes[neighborId].direction = getNodeDirection(
          currNode,
          nodes[neighborId]
        );
      }
    });
  }

  return [nodesToAnimate, createPath(visitedNodes, start, end, foundEnd)];
};
