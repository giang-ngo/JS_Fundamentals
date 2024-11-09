'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMsg = (msg) => {
    document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMsg('No Number');
        // document.querySelector('.message').textContent = 'No Number';
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMsg('🎉 Correct Number!');
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (highscore < score) {
            highscore = document.querySelector('.highscore').textContent =
                score;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > secretNumber ? 'Too hight' : 'Too low';
            displayMsg(guess > secretNumber ? 'Too hight' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMsg('You lost the game 😭');
            // document.querySelector('.message').textContent =
            //     'You lost the game 😭';
            document.querySelector('.score').textContent = 0;
        }
    }
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent =
    //             'Bạn đoán số lớn hơn số ẩn';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Bạn đã thua';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } else {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent =
    //             'Bạn đoán số nhỏ hơn số ẩn';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Bạn đã thua';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector('body').style.backgroundColor = '#222';
    displayMsg('Start guessing...');
    // document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
});


