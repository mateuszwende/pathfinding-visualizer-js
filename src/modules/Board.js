import { createBlock } from "./helpers/block";
import { getRandomNum } from "./helpers/getRandomNum";
import { getDifferentRandomNum } from "./helpers/getDifferentRandomNum";
import { directions } from "./algorithms/helpers/weighted";
import updateObject from "./helpers/updateObject";
import {
  createNode,
  isNodeBlock,
  isNodeWall,
  isNodeStart,
  isNodeEnd,
} from "./node/operations";
import EventsHandler from "./events-handler/EventsHandler";
import { hasClass, removeClass, $, addClass } from "./helpers/dom";
import { CSS_CLASS, CSS_ID } from "./constants";
import { NODE_STATUS } from "./node/types";

class Board {
  constructor({ boardId, blockSize, speed, algorithms, initialAlgorithm }) {
    this.boardId = boardId;
    this.blockSize = blockSize;
    this.width = null;
    this.height = null;
    this.nodes = {};
    this.startNode = null;
    this.startDirection = "east";
    this.endNode = null;
    this.isNodeDragged = false;

    this.isSearching = false;
    this.isPrepared = false;
    this.isMakingWalls = false;
    this.isNodeDragged = false;
    this.draggedNodeId = null;
    this.speed = speed || 10;
    this.algorithms = algorithms || null;
    this.currentAlgorithm = initialAlgorithm || null;
  }

  initialize() {
    this.createNav();
    this.calculateBoardSize();
    this.createBoard();
    this.createStartNode();
    this.createEndNode();

    this.setInitialActiveNavAlgorithm();
    this.addNavAlgoElemsEventListeners();
    this.addBlocksEventListeners();
    this.addBtnsEventListeners();

    EventsHandler.addNavEventListeners(this.handleNavItemOnClick.bind(this));

    console.log(this);
    this.isPrepared = true;
  }

  handleNavItemOnClick(e) {
    const target = e.target;
    if (hasClass(target, CSS_CLASS.BLOCKED)) return;

    $.all(`.${CSS_CLASS.NAVIGATION_ITEM}`).forEach((item) =>
      removeClass(item, CSS_CLASS.ACTIVE)
    );
    addClass(target, CSS_CLASS.ACTIVE);

    this.setCurrentAlgorithm(target.dataset.algorithmKey);
    this.resetNodes();
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
        this.nodes[`${x}-${y}`] = createNode(x, y, this.currentAlgorithm);
      }
      tbody.appendChild(row);
    }
    board.appendChild(tbody);
  }

  createNav() {
    const nav = document.getElementById(CSS_ID.NAVIGATION);
    for (let [key, algo] of Object.entries(this.algorithms)) {
      const elem = document.createElement("div");
      addClass(elem, CSS_CLASS.NAVIGATION_ITEM);
      elem.innerText = algo.name;
      elem.dataset.algorithmKey = key;
      nav.appendChild(elem);
    }
  }

  setInitialActiveNavAlgorithm() {
    const elems = document.querySelectorAll(`.${CSS_CLASS.NAVIGATION_ITEM}`);
    elems[0].classList.add(CSS_CLASS.ACTIVE);
  }

  createStartNode() {
    const randX = getRandomNum(0, this.width - 1);
    const randY = getRandomNum(0, this.height - 1);
    const id = `${randX}-${randY}`;

    this.setStartNode(id);
    const block = document.getElementById(this.startNode.id);
    addClass(block, NODE_STATUS.START);
    if (this.startDirection) {
      addClass(block, this.startDirection);
    }
  }

  createEndNode() {
    const randX = getDifferentRandomNum(0, this.width - 1, this.startNode.x);
    const randY = getDifferentRandomNum(0, this.height - 1, this.startNode.y);
    const id = `${randX}-${randY}`;

    this.setEndNode(id);
    const block = document.getElementById(this.endNode.id);
    addClass(block, NODE_STATUS.END);
  }

  setStartNode(nodeId) {
    updateObject(this.nodes[nodeId], {
      status: NODE_STATUS.START,
      dist: 0,
      direction: this.startDirection ? directions[this.startDirection] : null,
    });
    this.startNode = this.nodes[nodeId];
  }

  setEndNode(nodeId) {
    updateObject(this.nodes[nodeId], {
      status: NODE_STATUS.END,
      dist: Infinity,
    });
    this.endNode = this.nodes[nodeId];
  }

  resetNodeToInitial(nodeId) {
    updateObject(this.nodes[nodeId], this.currentAlgorithm.node.initialValues);
  }

  addNavAlgoElemsEventListeners() {
    const elems = document.querySelectorAll(`.${CSS_CLASS.NAVIGATION_ITEM}`);

    elems.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (hasClass(e.target, CSS_CLASS.BLOCKED)) return;

        elems.forEach((elem) => elem.classList.remove(CSS_CLASS.ACTIVE));
        e.target.classList.add(CSS_CLASS.ACTIVE);

        this.setCurrentAlgorithm(e.target.dataset.algorithmKey);
        this.resetNodes();
      });
    });
  }

  addBtnsEventListeners() {
    const startBtn = document.getElementById(CSS_ID.START_BTN);
    const clearBtn = document.getElementById(CSS_ID.CLEAR_BTN);

    startBtn.addEventListener("click", (e) => this.handleStart(e));
    clearBtn.addEventListener("click", (e) => this.handleClear(e));
  }

  addBlocksEventListeners() {
    const blocks = document.querySelectorAll(`.${CSS_CLASS.UNVISITED}`);

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

  async handleStart(e) {
    if (this.isPrepared) {
      this.handleIsSearchingState(true);
      this.handleIsPreparedState(false);

      await this.currentAlgorithm.func(
        this.nodes,
        this.startNode,
        this.endNode,
        this.speed
      );
      this.handleIsSearchingState(false);
    }
  }

  handleClear(e) {
    if (!this.isSearching) {
      this.clearBoard();
      this.handleIsPreparedState(true);
    }
  }

  handleMouseDown(block) {
    const id = block.id;
    if (!isNodeBlock(this.nodes[id])) {
      this.draggedNodeId = id;
      this.isNodeDragged = true;
    } else if (!this.isNodeDragged && isNodeBlock(this.nodes[id])) {
      this.createWall(block);
      this.isMakingWalls = true;
    }
  }

  handleMouseEnter(block) {
    const id = block.id;
    if (this.isNodeDragged && isNodeBlock(this.nodes[id])) {
      const draggedNode = this.nodes[this.draggedNodeId];
      const status = draggedNode.status;
      addClass(block, status);

      if (isNodeStart(draggedNode)) {
        const direction = this.startDirection ? this.startDirection : "";
        addClass(block, direction);
      }
    } else if (this.isMakingWalls && isNodeBlock(this.nodes[id])) {
      this.createWall(block);
    }
  }

  handleMouseUp(block) {
    const id = block.id;
    if (
      this.isNodeDragged &&
      !isNodeWall(this.nodes[id]) &&
      this.draggedNodeId !== id
    ) {
      const draggedNode = this.nodes[this.draggedNodeId];
      if (isNodeStart(draggedNode)) {
        this.setStartNode(id);
      } else if (isNodeEnd(draggedNode)) {
        this.setEndNode(id);
      }
      this.resetNodeToInitial(this.draggedNodeId);

      this.isNodeDragged = false;
      this.draggedNodeId = null;
    } else {
      this.isMakingWalls = false;
    }
  }

  handleMouseLeave(block) {
    if (this.isNodeDragged) {
      const draggedNode = this.nodes[this.draggedNodeId];
      removeClass(block, draggedNode.status);

      if (isNodeStart(draggedNode)) {
        const direction = this.startDirection ? this.startDirection : "";
        removeClass(block, direction);
      }
    }
  }

  createWall(block) {
    addClass(block, CSS_CLASS.WALL);
  }

  setCurrentAlgorithm(algoKey) {
    this.currentAlgorithm = algoKey ? this.algorithms[algoKey] : null;
  }

  handleIsSearchingState(isSearching) {
    this.isSearching = isSearching;
    document.getElementById(CSS_ID.CLEAR_BTN).disabled = isSearching;
  }

  handleIsPreparedState(isPrepared) {
    this.isPrepared = isPrepared;
    document.getElementById(CSS_ID.START_BTN).disabled = !isPrepared;
  }

  clearBoard() {
    for (let y = this.height - 1; y >= 0; y--) {
      for (let x = 0; x < this.width; x++) {
        const id = `${x}-${y}`;
        this.resetNodeToInitial(id);

        document.getElementById(`${x}-${y}`).classList = [];
        document.getElementById(`${x}-${y}`).classList.add(CSS_CLASS.UNVISITED);
      }
    }
    this.createStartNode();
    this.createEndNode();
  }

  resetNodes() {
    const currStartNodeId = this.startNode.id;
    const currEndNodeId = this.endNode.id;
    this.nodes = {};

    for (let y = this.height - 1; y >= 0; y--) {
      for (let x = 0; x < this.width; x++) {
        const id = `${x}-${y}`;
        this.nodes[id] = createNode(x, y, this.currentAlgorithm);
      }
    }
    this.setStartNode(currStartNodeId);
    this.setEndNode(currEndNodeId);
  }
}

export default Board;
