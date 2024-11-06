const age = '18';
if (age === 18) console.log('Bạn vừa trở thành người lớn 😁(strict)');

if (age == 18) console.log('Bạn vừa trở thành người lớn 😁(loose)');

const favorite = Number(prompt('Con số yêu thích của bạn?'));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favorite == 7) {
    console.log('7 is also a cool number');
} else if (favorite == 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favorite !== 23 || favorite !== 7 || favorite != 9) {
    console.log('Why not 23 or 7 or 9');
}
