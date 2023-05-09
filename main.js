let decreaseBtn = document.getElementById('decrease');
let resetBtn = document.getElementById('reset');
let increaseBtn = document.getElementById('increase');
let randomBtn = document.getElementById('random');
let countSpan = document.getElementById('count');

let count = 0;

decreaseBtn.addEventListener('click', () => {
    count--;
    countSpan.textContent = count;
});


resetBtn.addEventListener('click', () => {
    count = 0;
    countSpan.textContent = count;
});


increaseBtn.addEventListener('click', () => {
    count++;
    countSpan.textContent = count;
});


randomBtn.addEventListener('click', () => {
    count = getRandomNumber(-100, 100);
    countSpan.textContent = count;
});


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// let decreaseBtn = document.querySelector('#decrease');
// let resetBtn = document.querySelector('#reset');
// let increaseBtn = document.querySelector('#increase');
// let randomBtn = document.querySelector('#random');
// let countSpan = document.querySelector('#count');

// let count = 0;

// decreaseBtn.addEventListener('click', () => {
//   count--;
//   countSpan.textContent = count;
// });

// resetBtn.addEventListener('click', () => {
//   count = 0;
//   countSpan.textContent = count;
// });

// increaseBtn.addEventListener('click', () => {
//   count++;
//   countSpan.textContent = count;
// });

// randomBtn.addEventListener('click', () => {
//   count = getRandomNumber(-100, 100);
//   countSpan.textContent = count;
// });

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
