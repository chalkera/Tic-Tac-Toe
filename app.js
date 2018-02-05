const prompt = require('prompt-sync')();
const { Board } = require('./helpers');

console.log('Welcome to a game of Tic Tac Toe!')
let player1 = prompt('Player 1: What\s your name? ', "Player 1 ");
let player2 = prompt('Player 2: What\s your name? ', "Player 2 ");
let cp = player1; // current player
let cpm = 'X'; // current player move

console.log(player1 + ' will go first and will be an "X"')
console.log(player2 + ' will go second and will be an "O"')

let board = new Board();
board.printBoard();

let rowMove, colMove;

for(let i = 0; i < 9; i ++) {
  rowMove = prompt(cp + 'please select a row number 1, 2, or 3 - ');
  colMove = prompt(cp + 'please select a column number 1, 2, or 3 - ');

  rowMove = rowMove - 1;
  colMove = colMove - 1;

  if(board.board[rowMove][colMove] === ' ') {
    board.board[rowMove][colMove] = cpm
  } else {
    console.log('Unable to move there, please try again');
    rowMove = prompt(cp + 'please select a row number 1, 2, or 3 - ');
    colMove = prompt(cp + 'please select a column number 1, 2, or 3 - ');
  }

  board.printBoard();

  // Check board for any three in a rows for a winner
  if( board.checkWin() ) {
    // Winner found!
    console.log("- - - - - - - - - - - - - - - - - - - - - - -");
    console.log('WINNER!')
    return 'Congratulations ' + cp;
  }

  // Switch current player and current player move piece
  if(cp === player1) {
    cp = player2;
    cpm = 'O';
  } else {
    cp = player1;
    cpm = 'X';
  }
}

console.log("Game Over! Cat's game, try again.")
