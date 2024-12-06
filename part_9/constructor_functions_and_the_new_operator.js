'use strict';

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never to this
    // this.calcAge = function () {
    //     console.log(2024 - this.birthYear);
    // };
};

const giang = new Person('Giang', 2000);
console.log(giang);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype ({} liên kết với nguyên mẫu)
// 4. function automatically return {} (hàm tự động trà về đối tượng)

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(giang instanceof Person);
console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear);
};

giang.calcAge();
matilda.calcAge();

console.log(giang.__proto__);
console.log(giang.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(giang));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(jay));

Person.prototype.species = 'Homo Sapiens';
console.log(giang.species, matilda.species);

console.log(giang.hasOwnProperty('species'));

console.log(giang.__proto__);
// Object.prototype (top of prototype chain)
console.log(giang.__proto__.__proto__);
console.log(giang.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 6, 7, 8, 9, 6, 6, 6]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir((x) => x + 1);
