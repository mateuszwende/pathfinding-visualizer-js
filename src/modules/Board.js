import { createBlock } from "./helpers/block";
import { getRandomNum } from "./helpers/getRandomNum";
import { getDifferentRandomNum } from "./helpers/getDifferentRandomNum";
import Node from "./Node";
import { directions, getDirectionName } from "./algorithms/helpers/weighted";

class Board {
  constructor(boardId, blockSize, algorithms) {
    this.boardId = boardId;
    this.blockSize = blockSize;
    this.width = null;
    this.height = null;
    this.nodes = {};
    this.startNode = null;
    this.startInitialDirection = "north";
    this.endNode = null;
    this.isMakingWalls = false;
    this.isNodeDragged = false;
    this.draggedNodeClassList = null;
    this.algorithms = algorithms;
    this.currentAlgorithm = null;
    this.speed = 40;
    this.isSearching = false;
    this.isPrepared = false;
  }

  initialize() {
    this.createNav();
    this.calculateBoardSize();
    this.createBoard();
    this.setStartNode();
    this.setEndNode();

    this.setCurrentAlgorithm("dijkstra");

    this.addNavAlgoElemsEventListeners();
    this.addBlocksEventListeners();
    this.addBtnsEventListeners();

    console.log(this);
    this.isPrepared = true;
  }

  calculateBoardSize() {
    const board = document.getElementById(this.boardId);
    const pxWidth = board.clientWidth;
    const pxHeight = board.clientHeight;

    this.width = Math.floor(pxWidth / this.blockSize);
    this.height = Math.floor(pxHeight / this.blockSize);
  }

  createBoard() {
    const board = document.getElementById(this.boardId);
    const tbody = document.createElement("tbody");

    for (let y = this.height - 1; y >= 0; y--) {
      const row = document.createElement("tr");
      for (let x = 0; x < this.width; x++) {
        createBlock(row, this.blockSize, x, y);

        const newNode = new Node("block", x, y, Infinity, null, null);
        this.nodes[newNode.id] = newNode;
      }
      tbody.appendChild(row);
    }

    board.appendChild(tbody);
  }

  createNav() {
    const nav = document.getElementById("nav");
    for (let [key, algo] of Object.entries(this.algorithms)) {
      const elem = document.createElement("div");
      elem.classList.add("nav-algorithm-js");
      elem.innerText = algo.name;
      elem.dataset.algorithmKey = key;
      nav.appendChild(elem);
    }
  }

  setCurrentAlgorithm(algo) {
    this.currentAlgorithm = this.algorithms[algo].func;
    const elems = document.querySelectorAll(".nav-algorithm-js");
    elems[0].classList.add("active");
  }

  setStartNode() {
    const randX = getRandomNum(0, this.width - 1);
    const randY = getRandomNum(0, this.height - 1);
    const id = `${randX}-${randY}`;

    this.setNodeAsStart(id);
    document
      .getElementById(this.startNode.id)
      .classList.add("start", this.startInitialDirection);
  }

  setEndNode() {
    const randX = getDifferentRandomNum(0, this.width - 1, this.startNode.x);
    const randY = getDifferentRandomNum(0, this.height - 1, this.startNode.y);
    const id = `${randX}-${randY}`;

    this.setNodeAsEnd(id);
    document.getElementById(this.endNode.id).classList.add("end");
  }

  addNavAlgoElemsEventListeners() {
    const elems = document.querySelectorAll(".nav-algorithm-js");

    elems.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        const isBlocked = e.target.classList.contains("blocked");
        if (isBlocked) return;

        elems.forEach((elem) => elem.classList.remove("active"));
        e.target.classList.add("active");
        this.currentAlgorithm = this.algorithms[
          e.target.dataset.algorithmKey
        ].func;
      });
    });
  }

  addBtnsEventListeners() {
    const startBtn = document.getElementById("startBtn");
    const clearBtn = document.getElementById("clearBtn");

    startBtn.addEventListener("click", async (e) => {
      if (this.isPrepared) {
        this.handleIsSearchingState(true);
        this.handleIsPreparedState(false);

        await this.currentAlgorithm(
          this.nodes,
          this.startNode,
          this.endNode,
          this.speed
        );
        this.handleIsSearchingState(false);
      }
    });

    clearBtn.addEventListener("click", (e) => {
      if (!this.isSearching) {
        this.clearBoard();
        this.handleIsPreparedState(true);
      }
    });
  }

  addBlocksEventListeners() {
    const blocks = document.querySelectorAll(".unvisited");

    blocks.forEach((block) => {
      block.addEventListener("mousedown", (e) => {
        e.preventDefault();
        this.handleMouseDown(block);
      });

      block.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        this.handleMouseEnter(block);
      });

      block.addEventListener("mouseup", (e) => {
        e.preventDefault();
        this.handleMouseUp(block);
      });

      block.addEventListener("mouseleave", (e) => {
        e.preventDefault();
        this.handleMouseLeave(block);
      });
    });
  }

  handleMouseDown(block) {
    const id = block.id;
    if (!this.isNodeBlock(id)) {
      this.draggedNodeId = id;
      this.isNodeDragged = true;
    } else if (!this.isNodeDragged) {
      this.createWall(block);
      this.setMakingWallsState(true);
    }
  }

  handleMouseEnter(block) {
    if (this.isNodeDragged && !this.isBlockWall(block)) {
      const draggedNode = this.nodes[this.draggedNodeId];
      if (draggedNode.status === "start" && !block.classList.contains("end")) {
        const directionName = getDirectionName(draggedNode.direction);
        block.classList.add("start", directionName);
      } else if (
        draggedNode.status === "end" &&
        !block.classList.contains("start")
      ) {
        block.classList.add("end");
      }
    } else if (this.isMakingWalls && this.isNodeBlock(block.id)) {
      this.createWall(block);
    }
  }

  handleMouseUp(block) {
    const id = block.id;
    if (
      this.isNodeDragged &&
      id !== this.draggedNodeId &&
      !this.isBlockWall(block)
    ) {
      if (this.nodes[this.draggedNodeId].status === "start") {
        this.setNodeAsStart(id);
      } else if (this.nodes[this.draggedNodeId].status === "end") {
        this.setNodeAsEnd(id);
      }

      // update the initially dragged node
      this.setNodeAsBlock(this.draggedNodeId);

      this.isNodeDragged = false;
      this.draggedNodeId = null;
    } else {
      this.setMakingWallsState(false);
    }
  }

  handleMouseLeave(block) {
    if (this.isNodeDragged) {
      const draggedNode = this.nodes[this.draggedNodeId];
      if (draggedNode.status === "start") {
        const directionName = getDirectionName(draggedNode.direction);
        block.classList.remove("start", directionName);
      } else if (draggedNode.status === "end") {
        block.classList.remove("end");
      }
    }
  }

  //
  isNodeBlock(id) {
    return !(
      this.nodes[id].status === "start" || this.nodes[id].status === "end"
    );
  }

  // WALLS
  createWall(block) {
    window.requestAnimationFrame(() => block.classList.add("wall"));
  }

  isBlockWall(block) {
    return block.classList.contains("wall");
  }

  setMakingWallsState(bool) {
    this.isMakingWalls = bool;
  }

  handleIsSearchingState(isSearching) {
    this.isSearching = isSearching;
    document.getElementById("clearBtn").disabled = isSearching;
  }

  handleIsPreparedState(isPrepared) {
    this.isPrepared = isPrepared;
    document.getElementById("startBtn").disabled = !isPrepared;
  }

  clearBoard() {
    for (let y = this.height - 1; y >= 0; y--) {
      for (let x = 0; x < this.width; x++) {
        this.nodes[`${x}-${y}`].update({
          status: "block",
          dist: Infinity,
          prevId: null,
          direction: null,
        });
        document.getElementById(`${x}-${y}`).classList = [];
        document.getElementById(`${x}-${y}`).classList.add("unvisited");
      }
    }
    this.setStartNode();
    this.setEndNode();
  }

  setNodeAsStart(nodeId) {
    this.nodes[nodeId].update({
      status: "start",
      dist: 0,
      direction: directions[this.startInitialDirection],
    });
    this.startNode = this.nodes[nodeId];
  }

  setNodeAsEnd(nodeId) {
    this.nodes[nodeId].update({
      status: "end",
      dist: Infinity,
      direction: null,
    });
    this.endNode = this.nodes[nodeId];
  }

  setNodeAsBlock(nodeId) {
    this.nodes[nodeId].update({
      status: "block",
      dist: Infinity,
      direction: null,
    });
  }
}

export default Board;
