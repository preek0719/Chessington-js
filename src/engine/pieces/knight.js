import Square from '../square';
import Piece from './piece';
export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }
    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let knightAvailableMoves = [];
        for (let i=location.col; i<location.col+1; i++) {
            knightAvailableMoves.push(Square.at(location.row+2, i+1));
            knightAvailableMoves.push(Square.at(location.row-2, i+1));
        }
        for (let i=location.col-1; i<location.col; i++) {
            knightAvailableMoves.push(Square.at(location.row+2, i));
            knightAvailableMoves.push(Square.at(location.row-2, i));
        }
        for (let i=location.col; i<location.col+1; i++) {
            knightAvailableMoves.push(Square.at(location.row+1, i+2));
            knightAvailableMoves.push(Square.at(location.row-1, i+2));
        }
        for (let i=location.col-1; i<location.col; i++) {
            knightAvailableMoves.push(Square.at(location.row+1, i-1));
            knightAvailableMoves.push(Square.at(location.row-1, i-1));
        }
        return knightAvailableMoves;
    }
}
