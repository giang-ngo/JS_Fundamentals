class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        // Protected property
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for open an account, ${this.owner}`);
    }

    // Public interface
    getMovements() {
        return this._movements;
    }

    deposit(val) {
        this._movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
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
