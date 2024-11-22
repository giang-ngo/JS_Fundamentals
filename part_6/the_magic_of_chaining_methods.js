const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// pipeline
const euroToUSD = 1.1;
const totalDepositsUSD = movements
    .filter((mov) => mov > 0)
    .map((mov, i, arr) => {
        console.log(arr);
        return mov * euroToUSD;
    })
    // .map((mov) => mov * euroToUSD)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
