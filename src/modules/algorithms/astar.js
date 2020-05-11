import {
  getDistanceBetweenNodes,
  getNodeDirection,
  getWeightedManhattanDistance,
} from "./helpers/weighted";
import { getNeighborsIds } from "./helpers/neighbors";
import { getClosestNodeWithHeuristicDist, isSameNode } from "./helpers/nodes";
import { createPath } from "./helpers/createPath";
import { NODE_STATUS } from "../node/constants";

export const astar = (nodes, start, end) => {
  let unvisitedNodesIds = Object.keys(nodes);
  let visitedNodes = {};
  let nodesToAnimate = [];
  let foundEnd = false;

  nodes[start.id].heuristicDistance = getWeightedManhattanDistance(start, end);

  while (unvisitedNodesIds.length) {
    const currNode = getClosestNodeWithHeuristicDist(unvisitedNodesIds, nodes);
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
        nodes[neighborId].direction = getNodeDirection(
          currNode,
          nodes[neighborId]
        );
        nodes[neighborId].heuristicDistance = getWeightedManhattanDistance(
          nodes[neighborId],
          end
        );
        nodes[neighborId].prevId = currNode.id;
      }
    });
  }
  return [nodesToAnimate, createPath(visitedNodes, start, end, foundEnd)];
};
