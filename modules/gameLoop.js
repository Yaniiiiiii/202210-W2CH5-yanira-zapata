import { gameOfCells } from './board.js';
import { changingCellStatus } from './changeCellStatus.js';
import { countingAliveCells, countingDeathCells } from './counter.js';

export const changeArrayContent = (board, aliveCells, deathCells) => {
    let board2 = board;
    let board3;
    let sentinel;
    for (let i = 0; i < 5; i++) {
        sentinel = true;
        if (sentinel) {
            board3 = changingCellStatus(board);
            let aliveCells = countingAliveCells(board3);
            let deathCells = countingDeathCells(board3);
            changingCellStatus(board3, aliveCells, deathCells);
            sentinel = false;
            console.table(changingCellStatus(board3, aliveCells, deathCells));
        }
    }

    if (sentinel) {
        board2 = changingCellStatus(board);
        let aliveCells = countingAliveCells(board2);
        let deathCells = countingDeathCells(board2);
        changingCellStatus(board2, aliveCells, deathCells);
        sentinel = true;
        console.table(changingCellStatus(board2, aliveCells, deathCells));
    }
};
changeArrayContent(gameOfCells);
