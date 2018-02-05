class Board {
  constructor() {
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
  }

  printBoard() {
    console.log("                                         ");
    console.log("          1   2   3  ");
    console.log("        ~~~~~~~~~~~~~");
    console.log("      1 | " + this.board[0][0] + " | " + this.board[0][1] + " | " + this.board[0][2] + " |");
    console.log("        ~~~~~~~~~~~~~");
    console.log("      2 | " + this.board[1][0] + " | " + this.board[1][1] + " | " + this.board[1][2] + " |");
    console.log("        ~~~~~~~~~~~~~");
    console.log("      3 | " + this.board[2][0] + " | " + this.board[2][1] + " | " + this.board[2][2] + " |");
    console.log("        ~~~~~~~~~~~~~");
    console.log("                                         ");
    console.log("- - - - - - - - - - - - - - - - - - - - - - -");
    console.log("                                         ");
  }

  checkWin() {
    if(this.rowWin() === true || this.colWin() === true || this.daigonalWin() === true) {
      return true;
    }
    return false;
  }

  // rowWin checks each row for a winner
  rowWin() {
    if(this.board[0][0] + this.board[0][1] + this.board[0][2] === 'XXX' || this.board[0][0] + this.board[0][1] + this.board[0][2] === 'OOO' ) {
      console.log('Winner from row 1!')
      return true;
    } else if (this.board[1][0] + this.board[1][1] + this.board[1][2] === 'XXX' || this.board[0][0] + this.board[1][1] + this.board[1][2] === 'OOO' ) {
      console.log('Winner from row 2!')
      return true;
    } else if(this.board[2][0] + this.board[2][1] + this.board[2][2] === 'XXX' || this.board[0][0] + this.board[2][1] + this.board[2][2] === 'OOO' ) {
      console.log('Winner from row 3!')
      return true;
    } else {
      // next move
    }
  }

  colWin() {
    if(this.board[0][0] + this.board[1][0] + this.board[2][0] === 'XXX' || this.board[0][0] + this.board[1][0] + this.board[2][0] === 'OOO' ) {
      console.log('Winner from column 1!')
      return true;
    } else if (this.board[0][1] + this.board[1][1] + this.board[2][1] === 'XXX' || this.board[0][1] + this.board[1][1] + this.board[2][1] === 'OOO' ) {
      console.log('Winner from column 2!')
      return true;
    } else if(this.board[0][2] + this.board[1][2] + this.board[2][2] === 'XXX' || this.board[0][2] + this.board[1][2] + this.board[2][2] === 'OOO' ) {
      console.log('Winner from column 3!')
      return true;
    } else {
      // next move
    }
  }

  daigonalWin() {
    if(this.board[0][0] + this.board[1][1] + this.board[2][2] === 'XXX' || this.board[0][0] + this.board[1][1] + this.board[2][2] === 'OOO' ) {
      console.log('Winner from top left to bottom right');
      return true;
    } else if (this.board[0][2] + this.board[1][1] + this.board[2][0] === 'XXX' || this.board[0][2] + this.board[1][1] + this.board[2][0] === 'OOO' ) {
      console.log('Winner from top right to bottom left');
      return true;
    } else {
      // no winner, next move
    }
  }
}

module.exports =  {
  Board: Board
}
