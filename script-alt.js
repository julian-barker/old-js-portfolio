'use strict';

function $(x) {
  return document.getElementById(x);
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

let upper = 25;
let questions = [
  ['Do I like Pokemon? (yes/no)', 'yes'],
  ['Do I have any pets? (yes/no)', 'yes'],
  ['Do I live on the East Coast? (yes/no)', 'no'],
  ['Do I play video games? (yes/no)', 'yes'],
  ['Have I gone skydiving (yes/no)', 'no'],
  ['Guess a number between 1 and 25', Math.floor(Math.random() * upper + 1)],
  ['Guess my favorite fruits', ['kiwi', 'pineapple', 'clementine', 'grapes', 'watermelon']]
];

let totalScore = 0;

for(let i = 0; i < 7; i++) {
  if(i === 5) {
    //Question 6
    let lives = 4;
    let ans = questions[i][1];
    let correct = false;
    while(lives > 0) {
      let response = Number(prompt(`Guess a number between 1 and ${upper}. You have ${lives} guesses remaining.`));
      while(isNaN(response)) {
        alert('Only number inputs are valid');
        response = Number(prompt(`Guess a number between 1 and ${upper}. You have ${lives} guesses remaining.`));
      }
      if(response === ans) {
        alert(`You got it correct! It was ${response}`);
        totalScore++;
        correct = true;
        break;
      } else if(response < 1 || response > upper) {
        alert(`Please guess between 1 and ${upper}. You wasted a guess.`);
      } else if(response > ans) {
        alert('Too high!');
      } else {
        alert('Too low!');
      }
      lives--;
    }
    if(correct === false) {
      alert(`Sorry, out of lives! The correct answer was ${ans}`);
    }
  } else if(i === 6) {
    //Question 7
    let lives = 6;
    let correct = false;
    let answers = questions[i][1];
    console.log(answers);
    while(!correct) {
      while(lives > 0) {
        let response = prompt(`What is one of my favorite fruits? You have ${lives} guesses remaining.`);
        for (let ans of answers) {
          console.log(ans);
          if(ans === response) {
            alert(`You got it correct! The correct answers were ${answers}`);
            totalScore++;
            correct = true;
            lives = 0;
            break;
          }
        }
        lives--;
      }
      if(correct === false) {
        alert(`Sorry, out of lives! Correct answers were ${answers}`);
        break;
      }
    }
  } else {
    let response = '';
    let match;
    while (!(response === 'yes' || response === 'no')) {
      response = prompt(`${questions[i][0]}`);
      if(typeof response === 'string') {
        response = response.toLowerCase();
      }
    }
    match = (response === questions[i][1]);
    switch(match) {
      case true:
        console.log(`Question ${i+1}:
        Your response (${response}) is correct!`);
        alert('correct!');
        totalScore++;
        console.log(totalScore);
        break;
      default:
        console.log(`Question ${i+1}:
        Your response (${response}) is incorrect...`);
        alert('Sorry, incorrect');
    }
    if(i === 4) {
      let msg = `You got ${totalScore}/5 correct.`;
      console.log(msg);
      alert(msg);
    }
  }
}
alert(`Your total score is ${totalScore}/7!`);

draw();

function draw() {
  let can = $('canvas-1');
  let ctx = can.getContext('2d');
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(300, 100, 200, 200);
}
