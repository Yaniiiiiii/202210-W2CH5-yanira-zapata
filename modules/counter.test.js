import { countingAliveCells, countingDeathCells } from './counter';

describe('testing countAliveCells', () => {
    test('if element entered into function is not an array, it should throw an error', () => {
        const notArray = 'pepe';
        expect(() => {
            countingAliveCells(notArray);
        }).toThrow();
    });
});
describe('testing countingDeathCells', () => {
    test('if element entered into function is not an array, it should throw an error', () => {
        const notArray = 'pepe';
        expect(() => {
            countingDeathCells(notArray);
        }).toThrow();
    });
});
