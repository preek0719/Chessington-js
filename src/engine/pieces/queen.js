import Piece from './piece';
import Square from "../square";
import Player from "../player";


export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }   

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let queenAvailableMoves = [];

        for (let i = location.row+1, j = location.col+1; i <= 7 && j <= 7; i++, j++) {
            queenAvailableMoves.push(Square.at(i, location.col));
            queenAvailableMoves.push(Square.at(location.row, j));
            queenAvailableMoves.push(Square.at(i,j))
        }
        for (let i = location.row-1, j = location.col-1; i >= 0 && j >= 0; i--, j--) {
          
            queenAvailableMoves.push(Square.at(i, location.col));
            queenAvailableMoves.push(Square.at(location.row, j));
            queenAvailableMoves.push(Square.at(i,j))
        }
       
        for (let i = location.row +1, j = location.col -1; i <= 7 && j >= 0; i++, j--) { 
            
            queenAvailableMoves.push(Square.at(i, j));
        }
       
        for (let i = location.row - 1, j = location.col + 1; i >=0 && j<=7; i--, j++) { 
            
            queenAvailableMoves.push(Square.at(i, j));
        }
     
        return queenAvailableMoves;
        
    }
}

