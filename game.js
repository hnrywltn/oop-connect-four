import { Column } from './column.js'

export class Game {
  constructor(player1, player2) {
    this.player1Name = player1;
    this.player2Name = player2;
    this.currentPlayer = 1;
    this.columns = [
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column()
    ];
  }

  playInColumn(colNum) {
    this.columns[colNum].add(this.currentPlayer)
    if(this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
  }

  getName() {
    return `${this.player1Name} vs. ${this.player2Name}`;
  }

  getTokenAt(rowNum, colNum) {
    return this.columns[colNum].getTokenAt(rowNum);
  }

  isColumnFull(c) {
    return this.columns[c].isFull();
  }

};
