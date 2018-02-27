const chai = require('chai');
const mocha = require('mocha');
const { Board } = require('./helpers');
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
