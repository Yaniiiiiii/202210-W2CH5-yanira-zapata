import { countingAliveCells, countingDeathCells } from './counter.js';

export const changingCellStatus = (board) => {
    const dataDeathItems = countingDeathCells(board);
    const dataAliveItems = countingAliveCells(board);
    const board2 = board;
    dataDeathItems.forEach((deathItem) => {
        if (deathItem.countN === 3) {
            board2[deathItem.r][deathItem.c] = 1;
        }
    });
    dataAliveItems.forEach((aliveItem) => {
        if (aliveItem.countN < 2) {
            board2[aliveItem.r][aliveItem.c] = 0;
        }
        if (aliveItem.countN > 3) {
            board2[aliveItem.r][aliveItem.c] = 0;
        }
    });
    return board;
};
