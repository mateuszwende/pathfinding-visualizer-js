export const createBlock = (parent, blockSize, x, y) => {
  const block = document.createElement("td");

  block.id = `${x}-${y}`;
  block.classList.add("unvisited");
  block.style.width = `${blockSize}px`;
  block.style.height = `${blockSize}px`;

  block.dataset.x = x;
  block.dataset.y = y;

  parent.appendChild(block);
};
