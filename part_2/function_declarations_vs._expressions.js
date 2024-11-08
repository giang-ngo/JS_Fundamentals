const age = calcAge(2000);
function calcAge(birthYear) {
    return 2050 - birthYear;
}

const calcAge2 = function (birthYear) {
    return 2050 - birthYear;
};
const age2 = calcAge2(2000);

console.log(age, age2);
