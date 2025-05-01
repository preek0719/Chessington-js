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
        for (let i = location.row + 1, j = location.col + 1; i <= 7 && j <= 7; i++, j++) {
            if (board.getPiece(Square.at(i, location.col)) == undefined) {
                if (board.getPiece(Square.at(location.row, j)) == undefined) {
                    if (board.getPiece(Square.at(i, j)) == undefined) {
                        queenAvailableMoves.push(Square.at(i, location.col));
                        queenAvailableMoves.push(Square.at(location.row, j));
                        queenAvailableMoves.push(Square.at(i, j))
                    }
                    else if (board.getPiece(Square.at(i, j)).player == this.player) {
                        break;
                    }
                    else if (board.getPiece(Square.at(i, j)).player != this.player) {
                        queenAvailableMoves.push(Square.at(i, j));
                        break;
                       }}
                else if (board.getPiece(Square.at(location.row, j)) != undefined && board.getPiece(Square.at(location.row, j)).player == this.player) {
                    break;
                    }    
                 else if (board.getPiece(Square.at(location.row, j)) != undefined && board.getPiece(Square.at(location.row, j)).player != this.player) {
                        queenAvailableMoves.push(Square.at(location.row, j));
                        break;
                    }}
                    else if (( board.getPiece(Square.at(i, location.col))!= undefined && board.getPiece(Square.at(i, location.col)).player == this.player)) {
                        break;
                    }
                    else if ( board.getPiece(Square.at(i, location.col))!= undefined && board.getPiece(Square.at(i, location.col)).player != this.player) {
                        queenAvailableMoves.push(Square.at(i, location.col));
                        break;
                }
                }
        for (let i = location.row - 1, j = location.col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board.getPiece(Square.at(i, location.col)) == undefined) {
                if (board.getPiece(Square.at(location.row, j)) == undefined) {
                    if (board.getPiece(Square.at(i, j)) == undefined) {
                        queenAvailableMoves.push(Square.at(i, location.col));
                        queenAvailableMoves.push(Square.at(location.row, j));
                        queenAvailableMoves.push(Square.at(i, j))
                    }
                    else if (board.getPiece(Square.at(i, j)).player == this.player) {
                        break;
                    }
                    else if (board.getPiece(Square.at(i, j)).player != this.player) {
                        queenAvailableMoves.push(Square.at(i, j));
                        break;
                       }}
                 else if (board.getPiece(Square.at(location.row, j)) != undefined && board.getPiece(Square.at(location.row, j)).player == this.player) {
                    break;
                       }      
                 else if (board.getPiece(Square.at(location.row, j)) != undefined && board.getPiece(Square.at(location.row, j)).player != this.player) {
                        queenAvailableMoves.push(Square.at(location.row, j));
                        break;
                    }}
                    else if ( board.getPiece(Square.at(i, location.col))!= undefined && board.getPiece(Square.at(i, location.col)).player == this.player) {
                        break;
                    }
                    else if ( board.getPiece(Square.at(i, location.col))!= undefined && board.getPiece(Square.at(i, location.col)).player != this.player) {
                        queenAvailableMoves.push(Square.at(i, location.col));
                        break;
                }
                }
        for (let i = location.row + 1, j = location.col - 1; i <= 7 && j >= 0; i++, j--) {
            if (board.getPiece(Square.at(i, j)) == undefined) {
                queenAvailableMoves.push(Square.at(i, j));
            }
            else if (board.getPiece(Square.at(i, j)).player == this.player) {
                break;
            }
            else if (board.getPiece(Square.at(i, j)).player != this.player) {
                queenAvailableMoves.push(Square.at(i, j));
                break;
            }
        }
        for (let i = location.row - 1, j = location.col + 1; i >= 0 && j <= 7; i--, j++) {
            if (board.getPiece(Square.at(i, j)) == undefined) {
                queenAvailableMoves.push(Square.at(i, j));
            }
            else if (board.getPiece(Square.at(i, j)).player == this.player) {
                break;
            }
            else if (board.getPiece(Square.at(i, j)).player != this.player) {
                queenAvailableMoves.push(Square.at(i, j));
                break;
            }
        }
        return queenAvailableMoves;
    }
}
