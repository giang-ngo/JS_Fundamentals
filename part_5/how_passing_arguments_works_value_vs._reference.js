const flight = 'LH234';

const giang = {
    name: 'Giang Ngo',
    passport: 3242354545,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Ms. ' + passenger.name;

    if (passenger.passport === 3242354545) {
        alert('checked in');
    } else {
        alert('Wrong passport');
    }
};
// checkIn(flight, giang);
// console.log(flight);
// console.log(giang);

// const passenger = giang;
// const flightNum = flight;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000);
};

newPassport(giang);
checkIn(flight, giang);
