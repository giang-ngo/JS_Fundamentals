const firstName = 'Giang';

const job = 'teacher';
const birthYear = 2005;
const year = 2050;

const giang =
    "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(giang);

const giangNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(giangNew);

console.log(
    'String with \n\
    multiple \n\
    lines \n\
    ',
);

console.log(
    `String with
    multiple
    lines
    `,
);
