const calcAge = function (birthYear) {
    return 2050 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
    // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1990, 'Giang'));
console.log(yearsUntilRetirement(1970, 'Mike'));
