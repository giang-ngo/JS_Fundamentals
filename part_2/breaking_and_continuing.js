const giangArray = [
    'Giang',
    'Ngo',
    2050 - 2000,
    'teacher',
    ['Hoa', 'Phuong', 'Tuan', 'Tu', 'Vy'],
    true,
];
const types = [];

for (let i = 0; i < giangArray.length; i++) {
    console.log(giangArray[i], typeof giangArray[i]);

    // types[i] = typeof giangArray[i];
    types.push(typeof giangArray[i]);
}

console.log(types);
const years = [1991, 2007, 1996, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}

console.log(ages);

// continue and break
console.log('------------ ONLY STRING ------------');
for (let i = 0; i < giangArray.length; i++) {
    if (typeof giangArray[i] !== 'string') continue;
    console.log(giangArray[i], typeof giangArray[i]);
}

console.log('------------ BREAK WITH NUMBER ------------');
for (let i = 0; i < giangArray.length; i++) {
    if (typeof giangArray[i] === 'number') break;
    console.log(giangArray[i], typeof giangArray[i]);
}
