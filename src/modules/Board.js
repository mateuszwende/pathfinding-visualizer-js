import {
  createBlock,
  clearBlock,
  applyEndBlockCSS,
  applyStartBlockCSS,
  applyWallBlockCSS,
} from "./helpers/block";
import { getRandomNum } from "./helpers/getRandomNum";
import { getDifferentRandomNum } from "./helpers/getDifferentRandomNum";
import updateObject from "./helpers/updateObject";
import { hasClass, removeClass, $, addClass } from "./helpers/dom";
import {
  createNode,
  isNodeUnvisited,
  isNodeWall,
  isNodeStart,
  isNodeEnd,
} from "./node/operations";
import { CSS_CLASS, CSS_ID, ANIMATION_TYPE } from "./constants";
import { NODE_STATUS } from "./node/types";
import { directions } from "./algorithms/helpers/weighted";
import EventsHandler from "./events-handler/EventsHandler";
import Visualizer from "./Visualizer";

class Board {
  constructor({
    boardId,
    blockSize,
    delay,
    algorithms,
    initialAlgorithm,
    initialStartDirection,
  }) {
    this.boardId = boardId;
    this.blockSize = blockSize;
    this.width = null;
    this.height = null;
    this.nodes = {};
    this.startNode = null;
    this.startDirection = initialStartDirection;
    this.endNode = null;

    this.isSearching = false;
    this.isPrepared = false;
    this.isSearched = false;
    this.isMakingWalls = false;
    this.isNodeDragged = false;
    this.draggedNodeId = null;
    this.isAlgorithmChanged = false;
    this.algorithms = algorithms || null;
    this.currentAlgorithm = initialAlgorithm || null;

    this.visualizer = new Visualizer(delay);
    this.animationType = ANIMATION_TYPE.DELAYED;
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
    this.isAlgorithmChanged = true;
    this.recreateNodes();
  }

  calculateBoardSize() {
    const board = $.id(this.boardId);
    const pxWidth = board.clientWidth;
    const pxHeight = board.clientHeight;

    this.width = Math.floor(pxWidth / this.blockSize);
    this.height = Math.floor(pxHeight / this.blockSize);
  }

  createBoard() {
    const board = $.id(this.boardId);
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
    const nav = $.id(CSS_ID.NAVIGATION);
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
    applyStartBlockCSS(id, this.startDirection);
  }

  createEndNode() {
    const randX = getDifferentRandomNum(0, this.width - 1, this.startNode.x);
    const randY = getDifferentRandomNum(0, this.height - 1, this.startNode.y);
    const id = `${randX}-${randY}`;

    this.setEndNode(id);
    applyEndBlockCSS(id);
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

  setNodeToInitial(nodeId) {
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
        this.resetNodesExpectWalls();
        this.setStartNode(this.startNode.id);
        this.setEndNode(this.endNode.id);
      });
    });
  }

  addBtnsEventListeners() {
    const startBtn = $.id(CSS_ID.START_BTN);
    const clearBtn = $.id(CSS_ID.CLEAR_BTN);
    const clearWallsBtn = $.id(CSS_ID.CLEAR_WALLS_BTN);

    startBtn.addEventListener("click", (e) => this.handleDelayedStart());
    clearBtn.addEventListener("click", (e) => this.handleClear());
    clearWallsBtn.addEventListener("click", (e) => this.handleClearWalls());
  }

  addBlocksEventListeners() {
    const blocks = document.querySelectorAll(`.${CSS_CLASS.BLOCK}`);

    blocks.forEach((block) => {
      block.addEventListener("mousedown", (e) => {
        e.preventDefault();
        if (e.which === 1 && !this.isSearching) {
          this.handleMouseDown(block);
        }
      });

      block.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        if (!this.isSearching) this.handleMouseEnter(block);
      });

      block.addEventListener("mouseup", (e) => {
        e.preventDefault();
        if (!this.isSearching) this.handleMouseUp(block);
      });

      block.addEventListener("mouseleave", (e) => {
        e.preventDefault();
        if (!this.isSearching) this.handleMouseLeave(block);
      });
    });
  }

  handleDelayedStart() {
    this.prepareDelayedSearchStateStart();
    this.animationType = ANIMATION_TYPE.DELAYED;
    this.handleStart();
  }

  handleInstantStart() {
    this.prepareInstantSearchStateStart();
    this.animationType = ANIMATION_TYPE.INSTANT;
    this.handleStart();
  }

  async handleStart() {
    if (this.isPrepared) {
      this.handleSearchStateStart();

      const [nodesToAnimate, path] = await this.currentAlgorithm.func(
        this.nodes,
        this.startNode,
        this.endNode
      );

      await this.visualizer.run(nodesToAnimate, path, this.animationType);

      this.handleSearchStateEnd();
    }
  }

  handleClear(e) {
    if (!this.isSearching) {
      this.resetNodesAll();
      this.clearBoardAll();
      this.createStartNode();
      this.createEndNode();
      this.isPrepared = true;
      this.isSearched = false;
      this.isSearching = false;
    }
  }

  handleClearWalls() {
    if (!this.isSearching) {
      this.clearNodesFromWalls();
      this.clearBoardFromWalls();
    }
  }

  handleSearchStateStart() {
    this.isSearching = true;
    this.isPrepared = false;
    this.isSearched = false;
    $.id(CSS_ID.CLEAR_BTN).disabled = true;
    $.id(CSS_ID.CLEAR_WALLS_BTN).disabled = true;
    $.id(CSS_ID.START_BTN).disabled = true;
    const elems = document.querySelectorAll(`.${CSS_CLASS.NAVIGATION_ITEM}`);

    elems.forEach((elem) => {
      elem.classList.add(CSS_CLASS.BLOCKED);
    });
  }

  handleSearchStateEnd() {
    this.resetNodesExpectWalls();
    this.setStartNode(this.startNode.id);
    this.setEndNode(this.endNode.id);
    this.isSearching = false;
    this.isPrepared = true;
    this.isSearched = true;
    $.id(CSS_ID.CLEAR_BTN).disabled = false;
    $.id(CSS_ID.CLEAR_WALLS_BTN).disabled = false;
    $.id(CSS_ID.START_BTN).disabled = false;
  }

  prepareDelayedSearchStateStart() {
    this.clearBoardFromNodes();
    applyStartBlockCSS(this.startNode.id, this.startDirection);
    applyEndBlockCSS(this.endNode.id);
    this.isPrepared = true;
  }

  prepareInstantSearchStateStart() {
    this.clearBoardFromNodes();
    applyStartBlockCSS(this.startNode.id);
    applyEndBlockCSS(this.endNode.id);
    this.isPrepared = true;
  }

  handleMouseDown(block) {
    const id = block.id;
    if (
      !isNodeUnvisited(this.nodes[id]) &&
      !isNodeWall(this.nodes[id]) &&
      !this.isSearching
    ) {
      this.draggedNodeId = id;
      this.isNodeDragged = true;
    } else if (!this.isNodeDragged && isNodeUnvisited(this.nodes[id])) {
      this.createWall(block);
      this.isMakingWalls = true;
    }
  }

  handleMouseEnter(block) {
    const id = block.id;

    if (this.isNodeDragged && isNodeUnvisited(this.nodes[id])) {
      if (isNodeStart(this.nodes[this.draggedNodeId])) {
        this.setStartNode(id);
        applyStartBlockCSS(id, this.startDirection);
      } else if (isNodeEnd(this.nodes[this.draggedNodeId])) {
        this.setEndNode(id);
        applyEndBlockCSS(id);
      }

      this.setNodeToInitial(this.draggedNodeId);
      this.draggedNodeId = id;

      if (this.isSearched) {
        this.handleInstantStart();
      }
    } else if (this.isMakingWalls && isNodeUnvisited(this.nodes[id])) {
      this.createWall(block);
    }
  }

  handleMouseUp(block) {
    const id = block.id;
    if (this.isNodeDragged && !isNodeWall(this.nodes[id])) {
      this.isNodeDragged = false;
      this.draggedNodeId = null;
    } else {
      this.isMakingWalls = false;
    }
  }

  handleMouseLeave(block) {
    if (this.isNodeDragged) {
      clearBlock(this.draggedNodeId);
    }
  }

  createWall(block) {
    this.nodes[block.id].status = NODE_STATUS.WALL;
    applyWallBlockCSS(block.id);
  }

  setCurrentAlgorithm(algoKey) {
    this.currentAlgorithm = algoKey ? this.algorithms[algoKey] : null;
  }

  clearBoardAll() {
    this.loopBoard((id) => clearBlock(id));
  }

  clearBoardFromNodes() {
    this.loopBoard((id) => {
      if (!$.id(id).classList.contains(CSS_CLASS.WALL)) {
        clearBlock(id);
      }
    });
  }

  clearBoardFromWalls() {
    this.loopBoard((id) => {
      if ($.id(id).classList.contains(CSS_CLASS.WALL)) {
        clearBlock(id);
      }
    });
  }

  resetNodesExpectWalls() {
    this.loopBoard((id) => {
      if (!isNodeWall(this.nodes[id])) {
        this.setNodeToInitial(id);
      }
    });
  }

  clearNodesFromWalls() {
    this.loopBoard((id, x, y) => {
      if (isNodeWall(this.nodes[id])) {
        this.setNodeToInitial(id);
      }
    });
  }

  resetNodesAll() {
    this.setNodesToInitial();
  }

  setNodesToInitial() {
    this.loopBoard((id) => this.setNodeToInitial(id));
  }

  recreateNodes() {
    const currStartNodeId = this.startNode.id;
    const currEndNodeId = this.endNode.id;

    this.loopBoard((id, x, y) => {
      if (isNodeWall(this.nodes[id])) {
        this.nodes[id] = createNode(x, y, this.currentAlgorithm);
        this.nodes[id].status = NODE_STATUS.WALL;
      } else this.nodes[id] = createNode(x, y, this.currentAlgorithm);
    });

    this.setStartNode(currStartNodeId);
    this.setEndNode(currEndNodeId);
  }

  loopBoard(callback) {
    for (let y = this.height - 1; y >= 0; y--) {
      for (let x = 0; x < this.width; x++) {
        callback(`${x}-${y}`, x, y);
      }
    }
  }
}

export default Board;
