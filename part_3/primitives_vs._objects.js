'use strict';

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
    name: 'Giang',
    age: 24,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
