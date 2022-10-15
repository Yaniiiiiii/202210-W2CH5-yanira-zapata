const gameOfLife = [
    ['*', '*', '*', '*', '*'],
    ['*', 0, 1, 0, '*'],
    ['*', 0, 1, 0, '*'],
    ['*', 0, 1, 0, '*'],
    ['*', '*', '*', '*', '*'],
];

function AliveItems(r, c, countN) {
    this.r = r;
    this.c = c;
    this.countN = countN;
}
function DeathItems(r, c, countN) {
    this.r = r;
    this.c = c;
    this.countN = countN;
}

const countingAliveNeightbours = (array) => {
    let arrayAliveObjects = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] === 1) {
                let count = 0;
                if (array[i - 1][j] === 1) count++;
                if (array[i + 1][j] === 1) count++;
                if (array[i][j - 1] === 1) count++;
                if (array[i][j + 1] === 1) count++;
                if (array[i - 1][j - 1] === 1) count++;
                if (array[i - 1][j - 1] === 1) count++;
                if (array[i + 1][j - 1] === 1) count++;
                if (array[i - 1][j + 1] === 1) count++;
                if (array[i + 1][j + 1] === 1) count++;
                arrayAliveObjects.push(new AliveItems(i, j, count));
            }
        }
    }
    return arrayAliveObjects;
};

console.log(countingAliveNeightbours(gameOfLife));

const countingDeathNeightbours = (array) => {
    let arrayDeathObjects = [];
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
                arrayDeathObjects.push(new DeathItems(i, j, count));
            }
        }
    }
    return arrayDeathObjects;
};

console.log(countingDeathNeightbours(gameOfLife));
console.table(gameOfLife);
