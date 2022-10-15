import { gameOfLife } from './modules/board';
import { countingAliveCells, countingDeathCells } from './modules/counter.js';

console.log(countingAliveCells(gameOfLife));
console.log(countingDeathCells(gameOfLife));
console.table(gameOfLife);
