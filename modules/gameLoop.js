import { gameOfLife } from './board.js';
import { changingCellStatus } from './changeCellStatus.js';
import { countingAliveCells, countingDeathCells } from './counter.js';

export const changeArrayContent = (board, aliveCells,deathCells) => {
  for (i= 0; i< 10, i++) {
    let sentinel = true;
    if (sentinel){
    const board3 = changingCellStatus(board);
    let aliveCells = countingAliveCells(board3);
    let deathCells = countingDeathCells(board3);
    changingCellStatus(board3, aliveCells, deathCells)
    sentinel = false;
        console.log(changingCellStatus(board3, aliveCells, deathCells));
    }
  }
    if (sentinel){
    const board2 = changingCellStatus(board);
    let aliveCells = countingAliveCells(board2);
    let deathCells = countingDeathCells(board2);
    changingCellStatus(board3, aliveCells, deathCells);
    sentinel = true;
    console.table(
                changingCellStatus(board2, aliveCells, deathCells)
                );
    }
};
changeArrayContent(gameOfLife);
