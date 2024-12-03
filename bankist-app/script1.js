// BANKIST APP
// Data
const account1 = {
    owner: 'Giang Ngo',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};
const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};
const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};
const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
const accounts = [account1, account2, account3, account4];
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = (movements, sort = false) => {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `<div class="movements__row">
                <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
                <div class="movements__date">3 days ago</div>
                <div class="movements__value">${mov}€</div>
            </div>`;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const createUsernames = (accs) => {
    accs.forEach((acc) => {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map((name) => name[0])
            .join('');
    });
};

createUsernames(accounts);
const calcDisplayBalance = (acc) => {
    acc.balance = acc.movements.reduce((sum, mov) => sum + mov, 0);
    labelBalance.textContent = `${acc.balance.toFixed(2)}`;
};

const displaySummary = (movements) => {
    const incomes = movements
        .filter((mov) => mov > 0)
        .reduce((sum, mov) => sum + mov, 0);

    labelSumIn.textContent = `${incomes.toFixed(2)}`;

    const out = movements
        .filter((mov) => mov < 0)
        .reduce((sum, mov) => sum + mov, 0);

    labelSumOut.textContent = `${Math.abs(out.toFixed(2))}`;

    const interest = movements
        .map((mov) => (mov * 1.2) / 100)
        .filter((mov) => mov >= 1)
        .reduce((sum, mov) => sum + mov, 0);
    labelSumInterest.textContent = `${interest.toFixed(2)}`;
};

let currentAccount;
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    currentAccount = accounts.find(
        (acc) => acc.username === inputLoginUsername.value,
    );
    console.log(currentAccount);

    if (+currentAccount?.pin === +inputLoginPin.value) {
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(' ')[0]
        }`;
        console.log('login');
        containerApp.style.opacity = 100;
        updateUI(currentAccount);

        inputLoginPin.blur();
        inputLoginUsername.value = inputLoginPin.value = '';
    }
});

function updateUI(acc) {
    displayMovements(acc.movements);

    calcDisplayBalance(acc);

    displaySummary(acc.movements);
}

btnTransfer.addEventListener('click', (e) => {
    e.preventDefault();

    const amount = +inputTransferAmount.value;
    const receiverAcc = accounts.find(
        (acc) => acc.username === inputTransferTo.value,
    );

    console.log(amount, receiverAcc);
    if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        inputTransferTo.value !== currentAccount.username
    ) {
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        updateUI(currentAccount);

        inputTransferTo.value = inputTransferAmount.value = '';
    }
});
btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    if (
        currentAccount.username === inputCloseUsername.value &&
        +currentAccount.pin === +inputClosePin.value
    ) {
        const index = accounts.findIndex(
            (acc) => acc.username === currentAccount.username,
        );
        accounts.splice(index, 1);

        containerApp.style.opacity = 0;
        inputCloseUsername.value = inputClosePin.value = '';
    }
});

btnLoan.addEventListener('click', (e) => {
    e.preventDefault();

    const amount = +inputLoanAmount.value;
    if (
        amount > 0 &&
        currentAccount.movements.filter((mov) => mov >= amount * 0.1)
    ) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount);

        inputLoanAmount.value = '';
    }
});

let sorted = false;
btnSort.addEventListener('click', (e) => {
    e.preventDefault();

    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});
