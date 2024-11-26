const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1)/
(24 * 60 * 60 * 1000);
const days =
    calcDaysPassed(new Date(2037, 10, 19), new Date(2037, 10, 9, 10, 45)) ;
console.log(days);
