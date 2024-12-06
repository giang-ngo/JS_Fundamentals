class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype  prototype
    calcAge() {
        console.log(2024 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}!👋`);
    }

    get age() {
        return 2024 - this.birthYear;
    }

    // thiết lập thuộc tính đã tồn tại
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }
}

const walter = new PersonCl('Walter White', 1965);

const account = {
    owner: 'Giang',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);

console.log(jessica.age);
console.log(jessica.fullName);
console.log(walter.fullName);
