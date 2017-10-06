import Square from '../square';
import Piece from './piece';
export default class King extends Piece {
    constructor(player) {
        super(player);
    }
    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let kingAvailableMoves = [];
        for (let i = location.col; i < location.col+1; i++) {
            kingAvailableMoves.push(Square.at(location.row, i+1));
            kingAvailableMoves.push(Square.at(location.row-1, i+1))
            kingAvailableMoves.push(Square.at(location.row+1, i+1))
            kingAvailableMoves.push(Square.at(location.row+1, i))
            kingAvailableMoves.push(Square.at(location.row-1, i))
        }
        for (let i = location.col-1; i < location.col; i++) {
            kingAvailableMoves.push(Square.at(location.row, i));
            kingAvailableMoves.push(Square.at(location.row-1, i))
            kingAvailableMoves.push(Square.at(location.row+1, i))
        }
        return kingAvailableMoves;
    }
}
