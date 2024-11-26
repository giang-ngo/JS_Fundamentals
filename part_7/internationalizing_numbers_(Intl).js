const num = 3232989.23;

const options = {
    style: 'currency',
    // unit: 'mile-per-hour',
    unit: 'celsius',
    currency: 'EUR',
    useGrouping: false, 
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('en-DE', options).format(num));
console.log('Vietnam: ', new Intl.NumberFormat('vi-VN', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));

console.log(
    navigator.language,
    new Intl.NumberFormat(navigator.language).format(num),
);
