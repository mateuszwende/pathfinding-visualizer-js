/**
 * Possible directions of node
 */
export const directions = {
  north: 0,
  east: 1,
  south: 2,
  west: 3,
};

const directionsName = ["north", "east", "south", "west"];

/**
 * Get direction name by provided index
 */
export const getDirectionName = (index) => directionsName[index];

/**
 * Node can be directed into 4 directions - north, east, south and west
 * The array represents the weight of choosing the next direction
 * 90 degree turn costs 1 points
 * [0] - go north weight
 * [1] - go east weight
 * [2] - go south weight
 * [3] - go west weight
 */
export const northDirectionWeights = [0, 1, 2, 1];
export const eastDirectionWeights = [1, 0, 1, 2];
export const southDirectionWeights = [2, 1, 0, 1];
export const westDirectionWeights = [1, 2, 1, 0];

export const moveWeight = 1;

/**
 * Get distance between two nodes based on the weight
 */
export const getDistanceBetweenNodes = (node_1, node_2) => {
  // node_2 is up
  if (node_1.y < node_2.y && node_1.x === node_2.x) {
    return northDirectionWeights[node_1.direction] + moveWeight;
  }
  // node_2 is right
  else if (node_1.x < node_2.x && node_1.y === node_2.y) {
    return eastDirectionWeights[node_1.direction] + moveWeight;
  }
  // node_2 is bottom
  else if (node_1.y > node_2.y && node_1.x === node_2.x) {
    return southDirectionWeights[node_1.direction] + moveWeight;
  }
  // node_2 is left
  else if (node_1.x > node_2.x && node_1.y === node_2.y) {
    return westDirectionWeights[node_1.direction] + moveWeight;
  } else {
    throw new Error(
      "Something went wrong when setting the distance between nodes."
    );
  }
};

/**
 * Return direction of node_2 based on their positions
 */
export const getNodeDirection = (node_1, node_2) => {
  if (node_1.y < node_2.y && node_1.x === node_2.x) {
    return directions["north"];
  } else if (node_1.x < node_2.x && node_1.y === node_2.y) {
    return directions["east"];
  } else if (node_1.y > node_2.y && node_1.x === node_2.x) {
    return directions["south"];
  } else if (node_1.x > node_2.x && node_1.y === node_2.y) {
    return directions["west"];
  } else {
    throw new Error("Something went wrong when setting the direction of node.");
  }
};
