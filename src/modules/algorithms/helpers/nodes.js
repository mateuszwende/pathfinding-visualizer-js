/**
 * Get the closest node
 */

export const getClosestNode = (unvisitedIds, nodes) => {
  let min = Infinity;
  let minDistNodeId = 0;
  let index = 0;

  unvisitedIds.forEach((id, i) => {
    if (nodes[id]) {
      if (nodes[id].dist < min) {
        min = nodes[id].dist;
        minDistNodeId = id;
        index = i;
      }
    }
  });

  unvisitedIds.splice(index, 1);

  return nodes[minDistNodeId];
};
