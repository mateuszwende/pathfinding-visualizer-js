import {
  getDistanceBetweenNodes,
  getNodeDirection,
  getWeightedManhattanDistance,
} from "./helpers/weighted";
import { getNeighborsIds } from "./helpers/neighbors";
import { getClosestNodeWithHeuristicDist, isSameNode } from "./helpers/nodes";
import {
  visualizeVisitedNode,
  visualizePath,
  visualizeNeighborNode,
} from "../helpers/visualizer";
import { asyncForEach } from "../helpers/asyncForEach";

export const astar = async (nodes, start, end, speed) => {
  let unvisitedNodesIds = Object.keys(nodes);
  let visitedNodes = {};
  let foundEnd = false;

  nodes[start.id].heuristicDistance = getWeightedManhattanDistance(start, end);

  while (unvisitedNodesIds.length) {
    const currNode = getClosestNodeWithHeuristicDist(unvisitedNodesIds, nodes);
    if (!currNode) break;

    await visualizeVisitedNode(currNode.id, speed);

    visitedNodes[currNode.id] = currNode;

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

    await asyncForEach(neighborsIds, async (neighborId) => {
      const distanceBetweenNodes = getDistanceBetweenNodes(
        currNode,
        nodes[neighborId]
      );

      const isNeighborFurtherFromStart =
        currNode.dist + distanceBetweenNodes < nodes[neighborId].dist;

      if (isNeighborFurtherFromStart) {
        await visualizeNeighborNode(neighborId, speed);

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

  if (foundEnd) {
    visualizePath(visitedNodes, start, end, speed);
  }
};
