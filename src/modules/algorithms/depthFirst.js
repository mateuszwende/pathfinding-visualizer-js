import { getNeighborsIds } from "./helpers/neighbors";
import { visualizePath, visualizeVisitedNode } from "../helpers/visualizer";
import { isSameNode } from "./helpers/nodes";
import { asyncForEach } from "../helpers/asyncForEach";

export const depthFirst = async (nodes, start, end, speed) => {
  let unvisitedNodesIds = Object.keys(nodes);
  let visitedNodes = {};
  let foundEnd = false;

  const search = async (currNode, prevId) => {
    if (!currNode) return;
    if (foundEnd) return;
    await visualizeVisitedNode(currNode.id);

    currNode.prevId = prevId;
    visitedNodes[currNode.id] = currNode;
    unvisitedNodesIds = unvisitedNodesIds.filter((id) => id !== currNode.id);

    if (isSameNode(currNode, end)) {
      foundEnd = true;
      return;
    }

    const neighborsIds = getNeighborsIds(
      unvisitedNodesIds,
      nodes,
      currNode.x,
      currNode.y
    );

    await asyncForEach(neighborsIds, (id) => search(nodes[id], currNode.id));
  };

  await search(nodes[`${start.x}-${start.y}`]);

  if (foundEnd) {
    visualizePath(visitedNodes, start, end, speed);
  }
};
