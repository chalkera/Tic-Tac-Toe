const prompt = require('prompt-sync')();
const { Board } = require('./helpers');
class Player {
    constructor(piece) {
        this.name = "";
        this.piece = piece; //  "X" || "O"
    }

    SetName(newName) {
        this.name = newName;
    }

    SetPiece(piece) {
        this.piece = piece;
    }

    GetMove(board) {
        let row = this.getRowMove();
        let col = this.getColMove();
        
        row--;
        col--;
        
        if(!this.checkBoard(board, row, col)) {
            console.log('Sorry that spot seems to be taken!')
            return [row, col] = this.GetMove(board);
        }

        return [row, col];
    }

    getTestMove(board, tRow, tCol) {
        let row = tRow;
        let col = tCol;
        
        row--;
        col--;
        
        if(!this.checkBoard(board, row, col)) {
            console.log('Sorry that spot seems to be taken!')
            return [row, col] = this.GetMove(board);
        }

        return [row, col];
    }

    getRowMove() {
        let isValid = false;
        let move = prompt(this.name + ', please select a row number 1, 2, or 3 - ');
        
        if(move === "exit" || move === "done") {
            process.exit()
        } else if(move === "1" || move === "2" || move === "3") {
            return Number(move);
        }

        while(!isValid) {
            move = prompt('Sorry, I didn\'t queit get that.\n' + this.name + ', please select a row number 1, 2, or 3 - ');
            isValid = this.checkMove(move)
        }

        return Number(move);
    }

    getColMove() {
        let move = prompt(this.name + ', please select a col number 1, 2, or 3 - ');
        
        if(move === "exit" || move === "done") {
            process.exit()
        } else if(move === "1" || move === "2" || move === "3") {
            return Number(move);
        }

        while(!isValid) {
            move = prompt('Sorry, I didn\'t queit get that.\n' + this.name + ', please select a col number 1, 2, or 3 - ');
            isValid = this.checkMove(move)
        }
        
        return Number(move);
    }

    checkMove(move) {
        if(move === "1" || move === "2" || move === "3" ) {
            return false;
        } else if(move === "exit" || move === "done") {
            process.exit()
        } else {
            return false;
        }
    }

    checkBoard(board, row, col) {
        if(board[row][col] === ' ') {
            return true;
        }
        return false;
    }
}

module.exports = {
    Player: Player
}