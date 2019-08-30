const chai = require('chai');
const mocha = require('mocha');
const { Board } = require('./helpers');
const { Player } = require('./Player');
var expect = chai.expect;

describe('Class Board', function() {

  // Simple Board check
  describe('Print board', function(){
    it('Should expect the board to have an array', function(){
      let board = new Board();
      expect(board.board).to.be.a('array');
    });
    it('Should expect the board to have an array of 3 rows', function(){
      let board = new Board();
      expect(board.board).to.have.lengthOf(3);
    });
    it('Should expect the board to have an array of 3 columns', function(){
      let board = new Board();
      for(let i = 0; i < 3; i++) {
          expect(board.board[i]).to.have.lengthOf(3);
      }
    });
  });

  // Row Win conditional check
  describe('rowWin', function () {
    it('Should expect the board to pass three "XXX" in row 1', function(){
      let board = new Board();
      board.board[0][0] = 'X';
      board.board[0][1] = 'X';
      board.board[0][2] = 'X';
      expect(board.rowWin()).to.equal(true);
    });
    it('Should expect the board to pass three "XXX" in row 2', function(){
      let board = new Board();
      board.board[1][0] = 'X';
      board.board[1][1] = 'X';
      board.board[1][2] = 'X';
      expect(board.rowWin()).to.equal(true);
    });
    it('Should expect the board to pass three "XXX" in row 3', function(){
      let board = new Board();
      board.board[2][0] = 'X';
      board.board[2][1] = 'X';
      board.board[2][2] = 'X';
      expect(board.rowWin()).to.equal(true);
    });
    it('Should expect the board to pass three "OOO" in row 1', function(){
      let board = new Board();
      board.board[0][0] = 'O';
      board.board[0][1] = 'O';
      board.board[0][2] = 'O';
      expect(board.rowWin()).to.equal(true);
    });
    it('Should expect the board to pass three "OOO" in row 2', function(){
      let board = new Board();
      board.board[1][0] = 'O';
      board.board[1][1] = 'O';
      board.board[1][2] = 'O';
      expect(board.rowWin()).to.equal(true);
    });
    it('Should expect the board to pass three "OOO" in row 3', function(){
      let board = new Board();
      board.board[2][0] = 'O';
      board.board[2][1] = 'O';
      board.board[2][2] = 'O';
      expect(board.rowWin()).to.equal(true);
    });
    //Show only pass row wins
    it('Should expect the board to not pass three "XXX" in col 1', function(){
      let board = new Board();
      board.board[0][0] = 'X';
      board.board[1][0] = 'X';
      board.board[2][0] = 'X';
      expect(board.rowWin()).to.equal(false);
    });
    it('Should expect the board to not pass three "XXX" in col 2', function(){
      let board = new Board();
      board.board[0][1] = 'X';
      board.board[1][1] = 'X';
      board.board[2][1] = 'X';
      expect(board.rowWin()).to.equal(false);
    });
    it('Should expect the board to not pass three "XXX" in col 3', function(){
      let board = new Board();
      board.board[0][2] = 'X';
      board.board[1][2] = 'X';
      board.board[2][2] = 'X';
      expect(board.rowWin()).to.equal(false);
    });
    it('Should expect the board to not pass three "OOO" in col 1', function(){
      let board = new Board();
      board.board[0][0] = 'O';
      board.board[1][0] = 'O';
      board.board[2][0] = 'O';
      expect(board.rowWin()).to.equal(false);
    });
    it('Should expect the board to not pass three "OOO" in col 2', function(){
      let board = new Board();
      board.board[0][1] = 'O';
      board.board[1][1] = 'O';
      board.board[2][1] = 'O';
      expect(board.rowWin()).to.equal(false);
    });
    it('Should expect the board to not pass three "OOO" in col 3', function(){
      let board = new Board();
      board.board[0][2] = 'O';
      board.board[1][2] = 'O';
      board.board[2][2] = 'O';
      expect(board.rowWin()).to.equal(false);
    });
  });

  // Column Win Detection
  describe('colWin', function () {
    it('Should expect the board to pass three "XXX" in col 1', function(){
      let board = new Board();
      board.board[0][0] = 'X';
      board.board[1][0] = 'X';
      board.board[2][0] = 'X';
      expect(board.colWin()).to.equal(true);
    });
    it('Should expect the board to pass three "XXX" in col 2', function(){
      let board = new Board();
      board.board[0][1] = 'X';
      board.board[1][1] = 'X';
      board.board[2][1] = 'X';
      expect(board.colWin()).to.equal(true);
    });
    it('Should expect the board to pass three "XXX" in col 3', function(){
      let board = new Board();
      board.board[0][2] = 'X';
      board.board[1][2] = 'X';
      board.board[2][2] = 'X';
      expect(board.colWin()).to.equal(true);
    });
    it('Should expect the board to pass three "OOO" in col 1', function(){
      let board = new Board();
      board.board[0][0] = 'O';
      board.board[1][0] = 'O';
      board.board[2][0] = 'O';
      expect(board.colWin()).to.equal(true);
    });
    it('Should expect the board to pass three "OOO" in col 2', function(){
      let board = new Board();
      board.board[0][1] = 'O';
      board.board[1][1] = 'O';
      board.board[2][1] = 'O';
      expect(board.colWin()).to.equal(true);
    });
    it('Should expect the board to pass three "OOO" in col 3', function(){
      let board = new Board();
      board.board[0][2] = 'O';
      board.board[1][2] = 'O';
      board.board[2][2] = 'O';
      expect(board.colWin()).to.equal(true);
    });

    // Show only pass col wins
    it('Should expect the board to not pass three "XXX" in row 1', function(){
      let board = new Board();
      board.board[0][0] = 'X';
      board.board[0][1] = 'X';
      board.board[0][2] = 'X';
      expect(board.colWin()).to.equal(false);
    });
    it('Should expect the board to not pass three "XXX" in row 2', function(){
      let board = new Board();
      board.board[1][0] = 'X';
      board.board[1][1] = 'X';
      board.board[1][2] = 'X';
      expect(board.colWin()).to.equal(false);
    });
    it('Should expect the board to not pass three "XXX" in row 3', function(){
      let board = new Board();
      board.board[2][0] = 'X';
      board.board[2][1] = 'X';
      board.board[2][2] = 'X';
      expect(board.colWin()).to.equal(false);
    });
    it('Should expect the board to not pass three "OOO" in row 1', function(){
      let board = new Board();
      board.board[0][0] = 'O';
      board.board[0][1] = 'O';
      board.board[0][2] = 'O';
      expect(board.colWin()).to.equal(false);
    });
    it('Should expect the board to not pass three "OOO" in row 2', function(){
      let board = new Board();
      board.board[1][0] = 'O';
      board.board[1][1] = 'O';
      board.board[1][2] = 'O';
      expect(board.colWin()).to.equal(false);
    });
    it('Should expect the board to not pass three "OOO" in row 3', function(){
      let board = new Board();
      board.board[2][0] = 'O';
      board.board[2][1] = 'O';
      board.board[2][2] = 'O';
      expect(board.colWin()).to.equal(false);
    });
  });

  // Diagonal Win Detection
  describe('diagonalWin', function () {
    it('Should expect the board to pass three "XXX" diagonaly', function(){
      let board = new Board();
      board.board[0][0] = 'X';
      board.board[1][1] = 'X';
      board.board[2][2] = 'X';
      expect(board.diagonalWin()).to.equal(true);
    });
    it('Should expect the board to pass three "OOO" diagonaly', function(){
      let board = new Board();
      board.board[0][0] = 'O';
      board.board[1][1] = 'O';
      board.board[2][2] = 'O';
      expect(board.diagonalWin()).to.equal(true);
    });
  });

  // Global Check Win Condition that occurs only after 5 moves have begun
  describe('checkWin', function () {
    it('Should expect the board to pass three "OOO" ', function(){
      let board = new Board();
      board.board[0][0] = 'O';
      board.board[1][1] = 'O';
      board.board[2][2] = 'O';
      expect(board.checkWin()).to.equal(true);
    });
  });
});

describe('Class Player', function() {
  let player;
  let board;
  this.beforeEach(() => {
    player = new Player("X");
    board = new Board();
  });

  describe('SetName', () => {
    it('should be able to set a new name', () => {
        player.SetName("TEST");
        expect(player.name === "TEST");
        player.SetName("Second TEST");
        expect(player.name === "Second TEST");
    });
  });
  
  describe('SetPiece', () => {
    it('should start with a default value', () => {
      expect(player.piece === "X");
    });

    it('should be able to set a new game piece', () => {
        expect(player.piece === "X");
        player.SetPiece("O")
        expect(player.piece === "O");
    });
  });
  
  describe('GetMove', () => {
    it('should handle valid moves', () => {
      let move = player.getTestMove(board.board, 1, 1);
      expect(move.length === 2);
      expect(move[0] === 0 && move[1] === 0);
    });

    it('should handle invalid moves', () => {
      try {
        let move = player.getTestMove(board.board, 0, 0);
      } catch (error) {
        expect(error !== null)
        expect(error.message === "Cannot read property '-1' of undefined");
      }
    });
  });

  describe('checkMove', () => {
    it('should return true for a valid entry', () => {
      let isValid = player.checkMove("1");
      expect(isValid);

      isValid = player.checkMove("2");
      expect(isValid);

      isValid = player.checkMove("3");
      expect(isValid);
    });

    it('should return false for a invalid entry', () => {
      let isValid = player.checkMove(1);
      expect(!isValid);

      isValid = player.checkMove(false);
      expect(!isValid);

      isValid = player.checkMove(undefined);
      expect(!isValid);

      isValid = player.checkMove("Not a normal entry");
      expect(!isValid);
    });
  });
});
