import { getDistanceBetweenNodes, getNodeDirection } from "./helpers/weighted";
import { getNeighborsIds } from "./helpers/neighbors";
import { getClosestNode, isSameNode } from "./helpers/nodes";
import {
  visualizeNeighborNode,
  visualizeVisitedNode,
  visualizePath,
} from "../helpers/visualizer";

export const dijkstra = async (nodes, start, end, speed) => {
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

    neighborsIds.forEach((neighborId) => {
      const distanceBetweenNodes = getDistanceBetweenNodes(
        currNode,
        nodes[neighborId]
      );

      const isNeighborFurtherFromStart =
        currNode.dist + distanceBetweenNodes < nodes[neighborId].dist;

      if (isNeighborFurtherFromStart) {
        visualizeNeighborNode(neighborId);
        nodes[neighborId].dist = currNode.dist + distanceBetweenNodes;
        nodes[neighborId].prevId = currNode.id;
        nodes[neighborId].direction = getNodeDirection(
          currNode,
          nodes[neighborId]
        );
      }
    });
  }

  if (foundEnd) {
    visualizePath(visitedNodes, start, end, speed);
  }
};
