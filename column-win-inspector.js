export class ColumnWinInspector {
  constructor(columnArr) {
    this.columnArr = columnArr;
  }

  inspect() {
    let check = this.columnArr.tokens[this.columnArr.tokens.length - 1];
    let count = 0;
    for (let i = 5; i >= 0; i--) {
      let current = this.columnArr.tokens[i];
      if ((check === current) && check) {
        count++;
      } else {
        check = this.columnArr.tokens[i];
        count = 0;
      };
      if (count === 4) {
        return this.columnArr.tokens[i];
      }
    }
    return 0;
  }
}
