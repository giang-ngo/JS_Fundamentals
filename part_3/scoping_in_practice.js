'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millennial = true;
            const firstName = 'Steven';
            const str = `Oh, and you're a millennial, ${firstName}`;
            console.log(str);
            function add(a, b) {
                return a + b;
            }
            output = 'NEW OUTPUT';
        }
        console.log(millennial);
        // console.log(str);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Giang';
calcAge(1991);
