import NodeFactory from "./NodeFactory";

export const createNode = (x, y, algorithm) => {
  const newNode = NodeFactory.createNode(algorithm.node.type, {
    x,
    y,
    ...algorithm.node.initialValues,
  });
  return newNode;
};
