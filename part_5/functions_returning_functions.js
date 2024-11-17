const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greaterHey = greet('Hey');
greaterHey('Giang');
greaterHey('Steven');

greet('Hello')('Giang');

// Challenge
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow('Hi')('Giang');
