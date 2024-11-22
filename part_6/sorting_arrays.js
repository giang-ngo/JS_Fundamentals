// Strings
const owners = ['Giang', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
// return < 0, a, b (keep order)
// return > 0, b, a (switch order)
// a, b là 2 số liên tiếp nhau

// tăng
// movements.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     }
//     if (a < b) {
//         return -1;
//     }
// });

movements.sort((a, b) => a - b);

console.log(movements);
// giảm

// movements.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     }
//     if (a < b) {
//         return 1;
//     }
// });

movements.sort((a, b) => b - a);

console.log(movements);
