const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends[2]);
// console.log(friends[friends.length - 1]);
// console.log(friends);

friends[friends.length - 1] = 'Jay';
console.log(friends.length);
console.log(friends);

// const years = new Array(1999, 2000, 2003, 1995, 1998);
// console.log(years);

const firstName = 'Giang';
const giang = [firstName, 'Ngo', 2050 - 2000, 'teacher', friends];
console.log(giang);

// Exercise
const calcAge = function (birthYear) {
    return 2050 - birthYear;
};

const years = [1990, 2000, 1995, 1994, 2005];

const age = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[3]);
const age4 = calcAge(years[years.length - 1]);
console.log(age, age2, age3, age4);

const ages = [age, age2, age3, age4];
console.log(ages);
