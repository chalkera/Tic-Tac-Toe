const prompt = require('prompt-sync')();
const { Board } = require('./helpers');
const { Player } = require('./Player');

console.log('Welcome to a game of Tic Tac Toe!');
const player1 = new Player("X");
const player2 = new Player("O");

let name1 = prompt('Player 1: What\s your name? ', "Player 1");
player1.SetName(name1);

let name2 = prompt('Player 2: What\s your name? ', "Player 2");
player2.SetName(name2);

let cp = player1; // current player
let cpm = 'X'; // current player move

console.log(player1.name + ' will go first and will be an "X"');
console.log(player2.name + ' will go second and will be an "O"');
console.log('Enter "exit" or "done" at anytime to end the game.');

let board = new Board();
board.print();

let rowMove, colMove;

for(let i = 0; i < 9; i ++) {
  [rowMove, colMove] = cp.GetMove(board.board); // returns an array [row, col]
  board.board[rowMove][colMove] = cpm
  process.stdout.write('\033c');
  console.log(player1.name + ' will go first and will be an "X"\n' + player2.name + ' will go second and will be an "O"\nEnter "exit" or "done" at anytime to end the game.' )
  board.print();

  // Check board for any three in a rows for a winner
  if( board.checkWin() ) {
    // Winner found!
    console.log("- - - - - - - - - - - - - - - - - - - - - - -");
    console.log('WINNER! Congratulations ' + cp.name);
    process.exit();
    return;
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

console.log("Game Over! Cat's game, try again.");
process.exit();
