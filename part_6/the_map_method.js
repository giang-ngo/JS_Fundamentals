const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
    return mov * euroToUsd;
});

// const movementsUSD = movements.map((mov) => mov * euroToUsd);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
    movementsUSDfor.push(mov * euroToUsd);
}

console.log(movementsUSDfor);

const movementsDescription = movements.map(
    (mov, i) =>
        `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${mov}`,
    
);
console.log(movementsDescription);
