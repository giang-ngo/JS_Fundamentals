'use strict';

// var firstName = 'Matilda';
const giang = {
    firstName: 'Giang',
    year: 2000,
    calcAge: function () {
        console.log(this);
        console.log(2024 - this.year);

        // Solution 1
        // const self = this;
        // const isMillennial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // Solution 2
        const isMillennial = () => {
            console.log(this);
            console.log(this.year >= 1981 && self <= 1996);

            // console.log(this);
            // console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillennial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};

giang.greet();
giang.calcAge();

// arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 3);
addExpr(2, 3, 4, 5, 6, 7, 8);

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

addArrow(3, 4, 5);
