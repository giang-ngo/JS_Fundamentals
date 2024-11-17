const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book:function(){}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Giang Ngo');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// không hoạt động
// book(23, 'Giang Ngo');

// Call method
book.call(eurowings, 23, 'Giang Ngo');
console.log(eurowings);

book.call(lufthansa, 50, 'Giang Ngo');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 599, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Giang Ngo');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
bookLH(636, 'Giang Ngo');

console.log('-------------------------------------------');
const bookEW23 = book.bind(eurowings);
bookEW23('Steven Williams');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
// lufthansa.buyPlane();

document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(10, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(20)); //20*23

// const addTaxRate = function (rate) {
//     return function (value) {
//         return value + value * rate;
//     };
// };

const addTaxRateArr = (rate) => (value) => value + value * rate;

const addVAT2 = addTaxRateArr(0.23);
console.log(addVAT2(100));
console.log(addVAT2(20));
