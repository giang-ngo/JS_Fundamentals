// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
    // 1) Public fields (instances)
    locale = navigator.language;

    // 2) Private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // Protected property
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for open an account, ${this.owner}`);
    }
    // 3) Public methods

    // Public interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }

    static helper() {
        console.log('Helper');
    }

    // 4) Private methods
    #approveLoan(val) {
        return true;
    }
}
const acc1 = new Account('Giang', 'EUR', 1111, []);

// acc1._movements.push(250);
// acc1._movements.push(-2500);

acc1.deposit(250);
acc1.withdraw(2500);
acc1.requestLoan(1000);
// acc1._approveLoan(1000);  // Avoid calling protected methods directly
console.log(acc1.getMovements());

console.log(acc1);
// console.log(acc1._pin);  // Avoid accessing protected properties

// console.log(acc1.#movements); // error
// console.log(acc1.#approveLoan(200));// error
Account.helper();
