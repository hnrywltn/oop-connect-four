export class Column {
  constructor() {
    this.tokens = [null, null, null, null, null, null];
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
    //console.log(Boolean(this.tokens[0]))
    return Boolean(this.tokens[0]);
  }

  getTokenAt(rowIndex) {
    return this.tokens[rowIndex];
  }
};
