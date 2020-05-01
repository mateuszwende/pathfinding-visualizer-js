import { getNeighborsIds } from "./helpers/neighbors";
import {
  visualizePath,
  visualizeVisitedNode,
  visualizeNeighborNode,
} from "../helpers/visualizer";
import { getClosestNode, isSameNode } from "./helpers/nodes";
import { asyncForEach } from "../helpers/asyncForEach";

export const breadthFirst = async (nodes, start, end, speed) => {
  let unvisitedNodesIds = Object.keys(nodes);
  let visitedNodes = {};
  let foundEnd = false;

  while (unvisitedNodesIds.length) {
    const currNode = getClosestNode(unvisitedNodesIds, nodes);
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

    await asyncForEach(neighborsIds, (neighborId) => {
      const isNeighborFurtherFromStart = currNode.dist < nodes[neighborId].dist;

      if (isNeighborFurtherFromStart) {
        visualizeNeighborNode(neighborId, speed);

        nodes[neighborId].dist = currNode.dist + 1;
        nodes[neighborId].prevId = currNode.id;
      }
    });
  }

  if (foundEnd) {
    visualizePath(visitedNodes, start, end, speed);
  }
};
