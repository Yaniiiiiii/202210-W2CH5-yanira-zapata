import { changingCellStatus } from './changeCellStatus.js';
import { gameOfCells } from './board.js';

export const changeArrayContent = (board) => {
    console.table(board);
    let board2 = changingCellStatus(board);
    let sentinel = true;
    for (let i = 0; i < 1; i++) {
        if (sentinel) {
            console.table(board);
            board2 = changingCellStatus(board);
            sentinel = false;
            continue;
        }

        if (!sentinel) {
            console.table(board2);
            board = changingCellStatus(board2);
            sentinel = true;
        }
    }
};
changeArrayContent(gameOfCells);
