import { changingCellStatus } from './changeCellStatus.js';

export const changeArrayContent = (board) => {
    console.table(board);
    changingCellStatus(board);
};
