const giang = {
    firstName: 'Giang',
    lastName: 'Ngo',
    birthYear: 2000,
    job: 'teacher',
    friends: ['Hoa', 'Phuong', 'Tuan', 'Tu', 'Vy'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2050 - birthYear;
    // },
    // calcAge: function () {
    //     return 2050 - this.birthYear;
    // },
    calcAge: function () {
        this.age = 2050 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${
            this.job
        }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    },
};

console.log(giang.calcAge());
console.log(giang['calcAge']());

console.log(giang.age);

// Challenge
//"Giang is a 50-year old teacher, and he has a driver's license"
console.log(giang.getSummary());
