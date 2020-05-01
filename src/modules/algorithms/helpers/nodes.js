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

/**
 * Get the closest node based on distance from start and heuristic distance
 * from current position to end position
 */
export const getClosestNodeWithHeuristicDist = (unvisitedIds, nodes) => {
  let min = Infinity;
  let minHeuristicDistNodeId = 0;
  let index = 0;

  unvisitedIds.forEach((id, i) => {
    if (nodes[id]) {
      const nodeScore = nodes[id].dist + nodes[id].heuristicDistance;
      if (nodeScore < min) {
        min = nodeScore;
        minHeuristicDistNodeId = id;
        index = i;
      }
    }
  });

  unvisitedIds.splice(index, 1);

  return nodes[minHeuristicDistNodeId];
};
