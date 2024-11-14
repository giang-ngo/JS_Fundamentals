'use strict';
console.log(this);

const calcAge = function (birthYear) {
    console.log(2024 - birthYear);
    console.log(this);
};
calcAge(2000);

const calcAgeArrow = (birthYear) => {
    console.log(2024 - birthYear);
    console.log(this);
};
calcAgeArrow(2000);

const giang = {
    year: 2000,
    calcAge: function () {
        console.log(this);
        console.log(2024 - this.year);
    },
};

giang.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = giang.calcAge;
matilda.calcAge();

const f = giang.calcAge();
f();
