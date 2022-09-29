const checkbtn = document.querySelector('.check');
const againbtn = document.querySelector('.again');
let guess = document.querySelector('.guess');
let number = document.querySelector('.number');
let message = document.querySelector('.message');
let showScore = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
const container = document.querySelector('body');

// check button implementation
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let scorehigh = 0;

checkbtn.addEventListener('click', () => {
    //   console.log(guess.value);

    if (!guess.value) {
        message.textContent = '🚫 No number!';
    } else if (guess.value == secretNumber) {
        message.textContent = '🎊 Correct number!';
        container.style.backgroundColor = 'green';
        number.style.width = '30rem';
        number.textContent = secretNumber;
        if (score > scorehigh) {
            scorehigh = score;
            highscore.textContent = scorehigh;
        }
    } else if (guess.value > secretNumber) {
        if (score > 1) {
            score--;
            showScore.textContent = score;
            message.textContent = 'Too high...';
        } else {
            message.textContent = '💥 You lost!';
            showScore.textContent = 0;
        }
    } else if (guess.value < secretNumber) {
        if (score > 1) {
            score--;
            showScore.textContent = score;
            message.textContent = 'Too low...';
        } else {
            message.textContent = '💥 You lost!';
            showScore.textContent = 0;
        }
    }
});

//Play again button implementation
againbtn.addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    message.textContent = 'Start guessing...';
    showScore.textContent = score;
    number.textContent = '?';
    guess.value = '';
    container.style.backgroundColor = '#1c2c54';
    number.style.width = '15rem';
});
