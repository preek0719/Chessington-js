import Queen from '../../../src/engine/pieces/queen';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Board from '../../../src/engine/board';
import Pawn from '../../../src/engine/pieces/pawn';

describe('Queen', () => {
    let board;
        beforeEach(() => board = new Board());

        it('can make queen moves', () => {
            const queen = new Queen(Player.WHITE);
            board.setPiece(Square.at(4, 4), queen);
            const moves = queen.getAvailableMoves(board);
             const expectedMoves = [
                        //Up
                        Square.at(5, 4), Square.at(6, 4), Square.at(7, 4),
                        //Down
                        Square.at(3, 4), Square.at(2, 4), Square.at(1, 4), Square.at(0, 4),
                        //Right
                        Square.at(4, 5), Square.at(4, 6), Square.at(4, 7),
                        //Left
                        Square.at(4, 3), Square.at(4, 2),  Square.at(4, 1), Square.at(4, 0), 
                        //Top Right Diagonal
                        Square.at(5, 5), Square.at(6, 6), Square.at(7, 7),
                        //Bottom Left Diagonal
                        Square.at(3, 3), Square.at(2, 2), Square.at(1, 1), Square.at(0, 0),
                        //Top Left Diagonal
                        Square.at(5, 3), Square.at(6, 2), Square.at(7, 1),
                        //Bottom Right Diagonal
                        Square.at(3, 5), Square.at(2, 6), Square.at(1, 7)
                    ];
                    moves.should.deep.include.members(expectedMoves);
        });

        it('cannot make any other moves', () => {
            const queen = new Queen(Player.WHITE);
            board.setPiece(Square.at(4, 4), queen);
    
            const moves = queen.getAvailableMoves(board);
    
            moves.should.have.length(27);
        });

        it('can take opposing pieces', () => {
            const queen = new Queen(Player.WHITE);
            const opposingPiece = new Pawn(Player.BLACK);
            board.setPiece(Square.at(4, 4), queen);
            board.setPiece(Square.at(6, 6), opposingPiece);

            const moves = queen.getAvailableMoves(board);
            
            moves.should.not.deep.include(Square.at(7, 7));
        })

        it('cannot move through friendly  pieces', () => {
            const queen = new Queen(Player.WHITE);
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(4, 4), queen);
            board.setPiece(Square.at(4, 5), pawn);            
    
            const moves = queen.getAvailableMoves(board);
    
            moves.should.not.deep.include(Square.at(4, 6));
        });

        it('cannot move through opposing  pieces', () => {
            const queen = new Queen(Player.WHITE);
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(4, 4), queen);
            board.setPiece(Square.at(4, 5), pawn);            
    
            const moves = queen.getAvailableMoves(board);
    
            moves.should.not.deep.include(Square.at(4, 6));
        });


});
