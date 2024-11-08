const calcAge = (birthYear) => 2050 - birthYear;
const age = calcAge(2000);
console.log(age);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2050 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2000, 'Giang'));
