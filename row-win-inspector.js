export class RowWinInspector {
  constructor(columns) {
    this.columns = columns;
  }

  inspect() {
    for(let r = 0; r < 6; r++) {
      let t1 = this.columns[0].getTokenAt(r);
      let t2 = this.columns[1].getTokenAt(r);
      let t3 = this.columns[2].getTokenAt(r);
      let t4 = this.columns[3].getTokenAt(r);

      if((t1 === t2 && t2 === t3 && t3 === t4) && t1) {
        return t1;
      }
    }
    return 0;
  }

};
