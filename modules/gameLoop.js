// import { gameOfLife } from './board.js';
// import { changingCellStatus } from './changeCellStatus.js';
// import { countingAliveCells, countingDeathCells } from './counter.js';

// export const changeArrayContent = (board, aliveCells,deathCells) => {
//   for (i= 0; i< 10, i++) {
//     const sentinel = true;
//     if (sentinel){
//     const board3 = changingCellStatus(board);
//     let aliveCells = countingAliveCells(board3);
//     let deathCells = countingDeathCells(board3);
//     changingCellStatus(board3, aliveCells, deathCells)
//     sentinel = false;
//         console.log(changingCellStatus(board3, aliveCells, deathCells));
//     }
//   }

//     if (sentinel){
//     const board3 = changingCellStatus(board);
//     let aliveCells = countingAliveCells(board2);
//     let deathCells = countingDeathCells(board2);
//     changingCellStatus(board3, aliveCells, deathCells)
// };
// changeArrayContent(gameOfLife);
import { gameOfLife } from './board.js';
import { changingCellStatus } from './chngeCellStatus.js';
import {
    aliveDataBaseNeighbours,
    deathDataBaseNeighbours,
} from './data-Base.js';

export const boardLoop = (board) => {
    for (let i = 0; i < 10; i++) {
        let centinel = true;

        if (centinel) {
            const board3 = changingCellStatus(board);
            let dataBaseAlive = aliveDataBaseNeighbours(board3);
            let dataBaseDeath = deathDataBaseNeighbours(board3);
            changingCellStatus(board3, dataBaseAlive, dataBaseDeath);
            centinel = false;
            console.table(
                changingCellStatus(board3, dataBaseAlive, dataBaseDeath)
            );
        }
        if (!centinel) {
            const board2 = changingCellStatus(board);
            let dataBaseAlive = aliveDataBaseNeighbours(board2);
            let dataBaseDeath = deathDataBaseNeighbours(board2);
            changingCellStatus(board2, dataBaseAlive, dataBaseDeath);
            centinel = true;
            console.table(
                changingCellStatus(board2, dataBaseAlive, dataBaseDeath)
            );
        }
    }
};

boardLoop(gameOfLife);
