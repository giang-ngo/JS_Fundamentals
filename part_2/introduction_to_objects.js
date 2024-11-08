const giangArray = [
    'Giang',
    'Ngo',
    2050 - 2000,
    'teacher',
    ['Hoa', 'Phuong', 'Tuan', 'Tu', 'Vy'],
];

const giang = {
    firstName: 'Giang',
    lastName: 'Ngo',
    age: 2050 - 2000,
    job: 'teacher',
    friends: ['Hoa', 'Phuong', 'Tuan', 'Tu', 'Vy'],
};

console.log(giang);
console.log(giang.lastName);
console.log(giang['lastName']);

const nameKey = 'Name';
console.log(giang['first' + nameKey]);

const interestedIn = prompt(
    'What do you want to know about Giang? Choose between firstName, lastName, age, job and friends',
);

if (giang[interestedIn]) {
    console.log(giang[interestedIn]);
} else {
    console.log(
        'Wrong request! Choose between firstName, lastName, age, job and friends',
    );
}

giang.location = 'VietName';
giang['twitter'] = '@giangngo';
console.log(giang);

// Challenge
// Giang có 3 người bạn, người bạn thân nhất của cô ấy tên Vy
console.log(
    `${giang.firstName} has ${
        giang.friends.length
    } friends, and her best friend is called ${giang.friends[giang.friends.length - 1]}`,
);
