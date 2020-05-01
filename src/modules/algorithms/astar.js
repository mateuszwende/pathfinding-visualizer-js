import asyncDelay from "../helpers/asyncDelay";
import {
  getDistanceBetweenNodes,
  getNodeDirection,
  getWeightedManhattanDistance,
} from "./helpers/weighted";
import { getNeighborsIds } from "./helpers/neighbors";
import { visualizePath } from "../helpers/visualizePath";
import { getClosestNodeWithHeuristicDist } from "./helpers/nodes";

export const astar = async (nodes, start, end, speed) => {
  let unvisitedNodesIds = Object.keys(nodes);

  let visitedNodes = {};
  let foundEnd = false;
  const isSameNode = (n1, n2) => n1.x === n2.x && n1.y === n2.y;

  nodes[`${start.x}-${start.y}`].update({
    heuristicDistance: getWeightedManhattanDistance(start, end),
  });

  while (unvisitedNodesIds.length) {
    const currNode = getClosestNodeWithHeuristicDist(unvisitedNodesIds, nodes);
    // VISUALIZE
    document.getElementById(currNode.id).classList.add("visited");
    await asyncDelay(speed);

    if (!currNode) {
      break;
    }

    visitedNodes[currNode.id] = currNode;

    if (isSameNode(currNode, end)) {
      foundEnd = true;
      break;
    }

    getNeighborsIds(unvisitedNodesIds, nodes, currNode.x, currNode.y).forEach(
      (neighborId) => {
        const distanceBetweenNodes = getDistanceBetweenNodes(
          currNode,
          nodes[neighborId]
        );

        const isNeighborFurtherFromStart =
          currNode.dist + distanceBetweenNodes < nodes[neighborId].dist;

        if (isNeighborFurtherFromStart) {
          // VISUALIZE
          document
            .getElementById(nodes[neighborId].id)
            .classList.add("neighbor");

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
      }
    );
  }

  if (foundEnd) {
    visualizePath(visitedNodes, start, end, speed);
  }
};
