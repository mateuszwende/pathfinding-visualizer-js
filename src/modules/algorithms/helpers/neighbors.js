/**
 * Get node neighbors's keys
 */
export const getNeighborsIds = (nodes, x, y) => {
  let arr = [];
  if (
    nodes[`${x}-${y + 1}`] &&
    !document.getElementById(`${x}-${y + 1}`).classList.contains("wall")
  ) {
    arr.push(`${x}-${y + 1}`);
  }
  if (
    nodes[`${x + 1}-${y}`] &&
    !document.getElementById(`${x + 1}-${y}`).classList.contains("wall")
  ) {
    arr.push(`${x + 1}-${y}`);
  }
  if (
    nodes[`${x}-${y - 1}`] &&
    !document.getElementById(`${x}-${y - 1}`).classList.contains("wall")
  ) {
    arr.push(`${x}-${y - 1}`);
  }
  if (
    nodes[`${x - 1}-${y}`] &&
    !document.getElementById(`${x - 1}-${y}`).classList.contains("wall")
  ) {
    arr.push(`${x - 1}-${y}`);
  }
  return arr;
};
