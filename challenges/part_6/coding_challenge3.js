//Coding Challenge #3

/*
Viết lại hàm `calcAverageHumanAge` từ thử thách trước, 
nhưng lần này dưới dạng hàm mũi tên (arrow function), 
và sử dụng chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/
const ages = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (ages) =>
    ages
        .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
        .filter((age) => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge(ages);
const avg2 = calcAverageHumanAge(ages2);

console.log(avg1, avg2);
