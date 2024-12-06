const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never to this
    // this.calcAge = function () {
    //     console.log(2024 - this.birthYear);
    // };
};

class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    // các phương thức thể hiện
    // Methods will be added to .prototype  prototype
    calcAge() {
        console.log(2024 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}!👋`);
    }

    // Static method
    static hey() {
        console.log('Hey there 👋');
        console.log(this);
    }
}
const giang = new Person('Giang', 2000);

// Static Methods
Person.hey = function () {
    console.log('Hey there 👋');
    console.log(this);
};

Person.hey();
// giang.hey();//error

PersonCl.hey();
