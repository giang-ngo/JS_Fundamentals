// toán tử toán học
const now = 2050;
const ageGiang = now - 2000;
const ageVy = now - 1995;

console.log(ageGiang, ageVy);
console.log(ageGiang * 2, ageVy / 10, 2 ** 3);

const firstName = 'Giang';
const lastName = 'Ngo';
console.log(firstName + ' ' + lastName);

// toán tử gán
let x = 10 + 5; //15
x += 9; //x = x + 9
x *= 4; //x = x * 4
x++; //x = x + 1
x--; //x = x - 1
console.log(x); // 24

// toán tử so sánh
console.log(ageGiang > ageVy);
console.log(ageGiang >= 18);
console.log(now - 1998 >= now - 1999);
