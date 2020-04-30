import asyncDelay from "../helpers/asyncDelay";
import { getNeighborsIds } from "./helpers/neighbors";
import { visualizePath } from "../helpers/visualizePath";
import { getClosestNode } from "./helpers/nodes";

export const depthFirst = async (nodes, start, end, speed) => {
  let unvisitedNodesIds = Object.keys(nodes);

  let visitedNodes = {};
  let foundEnd = false;
  const isSameNode = (n1, n2) => n1.x === n2.x && n1.y === n2.y;

  const search = async (currNode, prevId) => {
    if (foundEnd) {
      return;
    }

    // VISUALIZE
    document.getElementById(currNode.id).classList.add("visited");
    await asyncDelay(speed);

    if (!currNode) {
      return;
    }

    currNode.prevId = prevId;

    visitedNodes[currNode.id] = currNode;
    unvisitedNodesIds = unvisitedNodesIds.filter((id) => id !== currNode.id);

    if (isSameNode(currNode, end)) {
      foundEnd = true;
      return;
    }

    const neighbors = getNeighborsIds(
      unvisitedNodesIds,
      nodes,
      currNode.x,
      currNode.y
    );

    for (let i = 0; i < neighbors.length; i++) {
      await search(nodes[neighbors[i]], currNode.id);
    }
  };

  await search(nodes[`${start.x}-${start.y}`]);

  // while (unvisitedNodesIds.length) {
  //   const currNode = getClosestNode(unvisitedNodesIds, nodes);
  //   // VISUALIZE
  //   document.getElementById(currNode.id).classList.add("visited");
  //   await asyncDelay(speed);

  //   if (!currNode) {
  //     break;
  //   }

  //   visitedNodes[currNode.id] = currNode;

  //   if (isSameNode(currNode, end)) {
  //     foundEnd = true;
  //     break;
  //   }

  //   getNeighborsIds(nodes, currNode.x, currNode.y).forEach((neighborId) => {
  //     const isNeighborFurtherFromStart = currNode.dist < nodes[neighborId].dist;

  //     if (isNeighborFurtherFromStart) {
  //       nodes[neighborId].dist = currNode.dist + 1;
  //       nodes[neighborId].prevId = currNode.id;
  //     }

  //     // VISUALIZE
  //     document
  //       .getElementById(nodes[neighborId].id)
  //       .classList.replace("unvisited", "neighbor");
  //   });
  // }
  console.log(visitedNodes);
  if (foundEnd) {
    visualizePath(visitedNodes, start, end, speed);
  }
};
