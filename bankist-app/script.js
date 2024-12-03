// BANKIST APP

// Data
const account1 = {
    owner: 'Giang Ngo',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2024-11-26T21:31:17.178Z',
        '2024-11-23T07:42:02.383Z',
        '2024-11-28T09:15:04.904Z',
        '2024-11-01T10:17:24.185Z',
        '2024-11-08T14:11:59.604Z',
        '2024-11-27T17:01:17.194Z',
        '2024-11-11T23:36:17.929Z',
        '2024-11-12T10:51:36.790Z',
    ],
    currency: 'VND',
    locale: 'vi-VN',
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2024-11-26T13:15:33.035Z',
        '2024-11-30T09:48:16.867Z',
        '2024-12-25T06:04:23.907Z',
        '2024-10-25T14:18:46.235Z',
        '2024-10-05T16:33:06.386Z',
        '2024-11-10T14:43:26.374Z',
        '2024-10-25T18:49:59.371Z',
        '2024-10-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2];

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

const formatMovementDate = function (date, locale) {
    const calcDaysPassed = (date1, date2) =>
        Math.round(Math.abs(date2 - date1) / (24 * 60 * 60 * 1000));

    const daysPassed = calcDaysPassed(new Date(), date);
    // console.log(daysPassed);

    if (daysPassed === 0) return 'Today';
    if (daysPassed === 1) return 'Yesterday';
    if (daysPassed <= 7) return `${daysPassed} days ago`;

    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;

    return new Intl.DateTimeFormat(locale).format(date);
};
const formatCur = function (value, locale, currency) {
    return (formattedMov = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(value));
};

const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort
        ? acc.movements.slice().sort((a, b) => a - b)
        : acc.movements;

    movs.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const date = new Date(acc.movementsDates[i]);

        const displayDate = formatMovementDate(date, acc.locale);

        const formattedMov = formatCur(mov, acc.locale, acc.currency);

        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
                <div class="movements__date">${displayDate}</div>
                <div class="movements__value">${formattedMov}</div>
            </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

    labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = (acc) => {
    const incomes = acc.movements
        .filter((mov) => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

    const out = acc.movements
        .filter((mov) => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

    // lãi suất 1.2 % số tiền gửi
    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((deposit) => (deposit * acc.interestRate) / 100)
        // ngân hàng chỉ trả lãi suất ít nhất là 1 đô
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = formatCur(
        interest,
        acc.locale,
        acc.currency,
    );
};

const createUsernames = (accounts) => {
    accounts.forEach((acc) => {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map((word) => word[0])
            .join('');
    });
    return accounts;
};
createUsernames(accounts);
const updateUI = (acc) => {
    // hiển thị movements
    displayMovements(acc);
    // hiện thị số dư
    calcDisplayBalance(acc);
    // hiển thị tóm tắt
    calcDisplaySummary(acc);
};

// xử lý sự kiện
let currentAccount, timer;

// Giả mạo luôn luôn đăng nhập
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

const startLogoutTimer = function () {
    const tick = () => {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);
        // Trong mỗi lần gọi, in thời gian còn lại ra giao diện người dùng (UI)
        labelTimer.textContent = `${min}:${sec}`;

        // khi về 0 seconds, dừng timer và log out người dùng
        if (time === 0) {
            clearInterval(timer);
            labelWelcome.textContent = 'Log in to get started';
            containerApp.style.opacity = 0;
        }

        time--;
    };
    // đặt thời gian là 5 phút
    let time = 120;
    // hẹn giờ timer mỗi giây
    tick();
    const timer = setInterval(tick, 1000);
    return timer;
};

btnLogin.addEventListener('click', (e) => {
    // ngăn form được submit
    e.preventDefault();
    currentAccount = accounts.find(
        (acc) => acc.username === inputLoginUsername.value,
    );
    console.log(currentAccount);

    if (currentAccount?.pin === +inputLoginPin.value) {
        // hiển thị UI và message
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(' ')[0]
        }`;
        containerApp.style.opacity = 100;

        // tạo ngày hiện tại
        const now = new Date();
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long',
        };

        // const locale = navigator.language;
        // console.log(locale);
        // hiện thị ngày giờ hiện tại (ngày giờ việt nam)
        labelDate.textContent = new Intl.DateTimeFormat(
            currentAccount.locale,
            options,
        ).format(now);

        // const day = `${now.getDate()}`.padStart(2, 0);
        // const month = `${now.getMonth() + 1}`.padStart(2, 0);
        // const year = now.getFullYear();
        // const hour = `${now.getHours()}`.padStart(2, 0);
        // const min = `${now.getMinutes()}`.padStart(2, 0);
        // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

        // xóa các trường input đầu vào
        inputLoginPin.value = inputLoginUsername.value = '';
        inputLoginPin.blur();

        if (timer) clearInterval(timer);
        timer = startLogoutTimer();
        // update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = +inputTransferAmount.value;
    const receiverAcc = accounts.find(
        (acc) => acc.username === inputTransferTo.value,
    );
    inputTransferTo.value = inputTransferAmount.value = '';

    if (
        amount > 0 &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
    ) {
        // thức hiện chuyển tiền
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // thêm ngày chuyển tiền
        currentAccount.movementsDates.push(new Date().toISOString());
        receiverAcc.movementsDates.push(new Date().toISOString());

        // update UI
        updateUI(currentAccount);

        // Reset timer
        clearInterval(timer);
        timer = startLogoutTimer();
    }
});

btnLoan.addEventListener('click', (e) => {
    // ngăn chặn hành động mặc định của form
    e.preventDefault();

    const amount = +inputLoanAmount.value;

    if (
        amount > 0 &&
        currentAccount.movements.some((mov) => mov >= amount * 0.1)
    ) {
        setTimeout(() => {
            // Add moment
            currentAccount.movements.push(amount);

            // thêm ngày vay tiền
            currentAccount.movementsDates.push(new Date().toISOString());

            // Update UI
            updateUI(currentAccount);

            // Reset timer
            clearInterval(timer);
            timer = startLogoutTimer();
        }, 2500);
    }
    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', (e) => {
    e.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.username &&
        +inputClosePin.value === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            (acc) => acc.username === currentAccount.username,
        );
        console.log(index);
        // xóa account
        accounts.splice(index, 1);

        // xóa xong ẩn UI
        containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', (e) => {
    e.preventDefault();
    displayMovements(currentAccount, !sorted);
    sorted = !sorted;
});

// labelBalance.addEventListener('click', () => {
//     const movementsUI = Array.from(
//         document.querySelectorAll('.movements__value'),
//         (el) => +el.textContent.replace('€', ''),
//     );
//     console.log(movementsUI);

//     const movementsUI2 = [
//         ...document.querySelectorAll('.movements__value'),
//         (el) => +el.textContent.replace('€', ''),
//     ];
//     console.log(movementsUI2);
// });
labelBalance.addEventListener('click', () => {
    [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
        // 0 ,2 ,4 ,6
        if (i % 2 === 0) row.style.backgroundColor = 'orange';

        // 0 ,3 ,6 ,9
        // if (i % 3 === 0) row.style.backgroundColor = 'blue';
    });
});
