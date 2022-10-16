import { gameOfCells } from './gameOfLife/board.js';
import {
    countingAliveCells,
    countingDeathCells,
} from './gameOfLife/counter.js';
import { changingCellStatus } from './gameOfLife/changeCellStatus.js';
//import { changeArrayContent } from './modules/gameLoop';

console.log(countingAliveCells(gameOfCells));
console.log(countingDeathCells(gameOfCells));
console.table(gameOfCells);
