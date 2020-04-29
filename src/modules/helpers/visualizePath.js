import asyncDelay from "./asyncDelay";

export const visualizePath = async (visitedNodes, start, end, speed) => {
  let pathIds = [];
  let foundStart = false;
  let currNode = visitedNodes[`${end.x}-${end.y}`];
  pathIds.push(currNode.id);

  while (!foundStart) {
    if (currNode.x === start.x && currNode.y === start.y) {
      foundStart = true;
      break;
    }
    pathIds.push(currNode.prevId);
    currNode = visitedNodes[currNode.prevId];
  }

  for (let i = pathIds.length - 1; i >= 0; i--) {
    document.getElementById(pathIds[i]).classList.add("path");
    await asyncDelay(speed + 100);
  }
};
