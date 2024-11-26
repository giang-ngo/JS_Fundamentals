console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);

console.log(323233333333333333323232657587666n);
console.log(BigInt(32323333));

// Operations
console.log(10000n + 10000n);
console.log(2332408868508574857485740830238254975945794n * 10000000n);
// console.log(Math.sqrt(16n));

const huge = 302832047802482048204820n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' IS REALLY big!!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);
