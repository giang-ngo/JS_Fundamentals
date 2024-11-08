for (let index = 1; index <= 10; index++) {
    console.log(`Lifting weights repetition ${index} 🏋️`);
}

let i = 1;
while (i <= 10) {
    // console.log(`Lifting weights repetition ${i} 🏋️`);
    i++;
}

let dice = Math.trunc(Math.random() * 6 + 1);
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6 + 1);
    if (dice === 6) {
        console.log('Loop is about to end...');
    }
}
