import asyncDelay from "../helpers/asyncDelay";
import { getDistanceBetweenNodes, getNodeDirection } from "./helpers/weighted";
import { getNeighborsIds } from "./helpers/neighbors";
import { visualizePath } from "../helpers/visualizePath";
import { getClosestNode } from "./helpers/nodes";

export const dijkstra = async (nodes, start, end, speed) => {
  let unvisitedNodesIds = Object.keys(nodes);

  let visitedNodes = {};
  let foundEnd = false;
  const isSameNode = (n1, n2) => n1.x === n2.x && n1.y === n2.y;

  while (unvisitedNodesIds.length) {
    const currNode = getClosestNode(unvisitedNodesIds, nodes);
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
          document
            .getElementById(nodes[neighborId].id)
            .classList.add("neighbor");
          nodes[neighborId].dist = currNode.dist + distanceBetweenNodes;
          nodes[neighborId].prevId = currNode.id;
          nodes[neighborId].direction = getNodeDirection(
            currNode,
            nodes[neighborId]
          );
        }
      }
    );
  }

  if (foundEnd) {
    visualizePath(visitedNodes, start, end, speed);
  }
};
