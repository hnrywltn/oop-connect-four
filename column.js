export class Column {
  constructor() {
    this.tokens = [0, 0, 0, 0, 0, 0];
  }

  add(playerNum) {
    for(let i = 5; i >= 0; i--) {
      if(!this.tokens[i]) {
        this.tokens[i] = playerNum;
        break;
      }
    }
  }

  isFull() {
    return Boolean(this.tokens[0]);
  }

  getTokenAt(rowIndex) {
    return this.tokens[rowIndex];
  }
};
