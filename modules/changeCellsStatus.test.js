import { gameOfCells } from './board.js';
import { changingCellStatus } from './changeCellStatus';
import { countingAliveCells } from './counter.js';

describe('testing changingCellStatus', () => {
    test('Given a grid with dead and alive cells, result should never have all alive cells due to superpopulation rule', () => {
        let result = changingCellStatus(gameOfCells);
        expect(() => {
            result.every((item) => item === 0);
        }).toBeFalsy;
    });
});

describe('testing countingAliveCells', () => {
    test('if element entered into function is not an array, it should throw an error', () => {
        const notArray = 'pepe';
        expect(() => {
            countingAliveCells(notArray);
        }).toThrow();
    });
});
