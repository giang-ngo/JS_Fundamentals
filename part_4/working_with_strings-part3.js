// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Giang Ngo'.split(' '));

const [firstName, lastName] = 'Giang Ngo'.split(' ');
console.log(firstName, lastName);

const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const item of names) {
        // namesUpper.push(item[0].toUpperCase() + item.slice(1));
        namesUpper.push(item.replace(item[0], item[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('giang ngo');

// Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Giang'.padStart(20, '+'));

const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};

console.log(maskCreditCard(43435908));
console.log(maskCreditCard('434359084309032'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed';
console.log(message2.repeat(5));

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(15);
