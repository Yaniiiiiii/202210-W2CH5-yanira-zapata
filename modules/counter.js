export function Cell(row, column, countN) {
    this.row = row;
    this.column = column;
    this.countN = countN;
}

export const countingAliveCells = (array) => {
    let arrayAliveCells = [];
    for (let i = 1; i < array.length - 1; i++) {
        for (let j = 1; j < array.length + 1; j++) {
            if (array[i][j] === 1) {
                let count = 0;
                if (array[i - 1][j] === 1) count++;
                if (array[i + 1][j] === 1) count++;
                if (array[i][j - 1] === 1) count++;
                if (array[i][j + 1] === 1) count++;
                if (array[i - 1][j - 1] === 1) count++;
                if (array[i + 1][j - 1] === 1) count++;
                if (array[i - 1][j + 1] === 1) count++;
                if (array[i + 1][j + 1] === 1) count++;
                arrayAliveCells.push(new Cell(i, j, count));
            }
        }
    }
    return arrayAliveCells;
};

export const countingDeathCells = (array) => {
    let arrayDeathCells = [];
    for (let i = 1; i < array.length - 1; i++) {
        for (let j = 1; j < array.length - 1; j++) {
            if (array[i][j] === 0) {
                let count = 0;
                if (array[i - 1][j] === 1) count++;
                if (array[i + 1][j] === 1) count++;
                if (array[i][j - 1] === 1) count++;
                if (array[i][j + 1] === 1) count++;
                if (array[i - 1][j - 1] === 1) count++;
                if (array[i + 1][j - 1] === 1) count++;
                if (array[i - 1][j + 1] === 1) count++;
                if (array[i + 1][j + 1] === 1) count++;
                arrayDeathCells.push(new Cell(i, j, count));
            }
        }
    }
    return arrayDeathCells;
};
