class Node {
  constructor(status, x, y, dist, prevId, direction) {
    this.status = status;
    this.id = `${x}-${y}`;
    this.x = x;
    this.y = y;
    this.dist = dist;
    this.prevId = prevId;
    this.direction = direction;
    this.heuristicDistance = null;

    this.update = this.update.bind(this);
  }

  update(values) {
    for (let fieldKey of Object.keys(this)) {
      for (let valKey of Object.keys(values)) {
        if (fieldKey === valKey) {
          this[fieldKey] = values[valKey];
        }
      }
    }
  }
}

export default Node;
