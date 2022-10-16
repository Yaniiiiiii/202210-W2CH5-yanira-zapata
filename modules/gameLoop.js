import { changingCellStatus } from './changeCellStatus.js';
import { gameOfCells } from './board.js';

export const changeArrayContent = (board) => {
    for (let i = 0; i < 1; i++) {
        console.table(board);
        board = changingCellStatus(board);
        continue;
    }
};
