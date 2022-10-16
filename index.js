import { gameOfCells } from './modules/board.js';
import { changeArrayContent } from './modules/gameLoop.js';
setInterval(() => {
    changeArrayContent(gameOfCells);
}, 1000);
