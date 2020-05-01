import asyncDelay from "../helpers/asyncDelay";
import { getNeighborsIds } from "./helpers/neighbors";
import { visualizePath } from "../helpers/visualizePath";
import { getClosestNode } from "./helpers/nodes";

export const breadthFirst = async (nodes, start, end, speed) => {
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
        const isNeighborFurtherFromStart =
          currNode.dist < nodes[neighborId].dist;

        if (isNeighborFurtherFromStart) {
          // VISUALIZE
          document
            .getElementById(nodes[neighborId].id)
            .classList.replace("unvisited", "neighbor");
          nodes[neighborId].dist = currNode.dist + 1;
          if (!nodes[neighborId].prevId) {
            nodes[neighborId].prevId = currNode.id;
          }
        }
      }
    );
  }

  if (foundEnd) {
    visualizePath(visitedNodes, start, end, speed);
  }
};
