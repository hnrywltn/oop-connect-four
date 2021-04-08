import { Column } from './column.js'
import { ColumnWinInspector } from './column-win-inspector.js'
import { RowWinInspector } from './row-win-inspector.js'
import { DiagonalWinInspector } from './diagonal-win-inspector.js'


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
      new Column()
    ];
    //(1 if play1) - (2 for 2) - (3 if tie) - (0 if still in progress)
    this.winnerNumber = 0;
  }

  checkForTie() {
    for (let i = 0; i < this.columns.length; i++) {
      if (!this.columns[i].isFull()) return;
    }
    this.winnerNumber = 3;
  }

  checkForColumnWin() {
    if (this.winnerNumber !== 0) return;
    for (let i = 0; i < this.columns.length; i++) {
      let inspector = new ColumnWinInspector(this.columns[i]);
      let winnerNumber = inspector.inspect();
      if (winnerNumber === 1 || winnerNumber === 2) {
        this.winnerNumber = winnerNumber;
        break;
      }
    }
  }

  checkForRowWin() {
    if (this.winnerNumber !== 0) return;
    for (let c = 0; c < 4; c++) {
      let columns = this.columns.slice(c, c + 4);
      let inspector = new RowWinInspector(columns);
      let winnerNumber = inspector.inspect();
      if (winnerNumber === 1 || winnerNumber === 2) {
        this.winnerNumber = winnerNumber;
        break;
      }
    }
  }

  playInColumn(colNum) {
    this.columns[colNum].add(this.currentPlayer)

    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }

    this.checkForColumnWin();
    this.checkForRowWin();
    this.checkForTie();
  }

  getName() {
    if (this.winnerNumber === 1) return this.player1Name + ' WINS!';
    if (this.winnerNumber === 2) return this.player2Name + ' WINS!';
    if (this.winnerNumber === 3) return `${this.player1Name} ties ${this.player2Name}`;
    return `${this.player1Name} vs. ${this.player2Name}`;
  }

  getTokenAt(rowNum, colNum) {
    return this.columns[colNum].getTokenAt(rowNum);
  }

  isColumnFull(c) {
    if (this.winnerNumber === 1 || this.winnerNumber === 2) return true;
    return this.columns[c].isFull();
  }

};
