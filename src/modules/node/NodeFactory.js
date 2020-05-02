import Node from "./Node";
import NodeWeighted from "./NodeWeighted";
import NodeHeuristic from "./NodeHeuristic";
import { NODE_TYPE } from "./types";

class NodeFactory {
  static createNode(type, props) {
    switch (type) {
      case NODE_TYPE.NORMAL:
        return new Node(props);
      case NODE_TYPE.WEIGHTED:
        return new NodeWeighted(props);
      case NODE_TYPE.HEURISTIC:
        return new NodeHeuristic(props);
      default:
        return new Node(props);
    }
  }
}

export default NodeFactory;
