'use strict';

function $(x) {
  return document.getElementById(x);
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.onload = function() {
  let guest = prompt('Please tell me your name.');
  while(!guest) {
    guest = prompt('C\'mon, just tell me.');
  }
  console.log('Name: ' + guest);
  let block = $('guest');
  block.innerHTML += guest;
  alert(`Welcome, ${guest}!`);
};

let firstTry = true;

function loadGame() {
  let space = $('quiz');
  let hiddenOption = '<option value="coding">Coding!</option>';
  let q =
  `<div id="qa">
      <ul>
          <li>
              <label for="q1">What is my favorite Pokemon?</label>
              <select name="pokemon" id="q1">
                  <option value="">-- Please select an option --</option>
                  <option value="squirtle">Squirtle</option>
                  <option value="charmander">Charmander</option>
                  <option value="bulbasaur">Bulbasaur</option>
                  <option value="pikachu">Pikachu</option>
              </select>
          </li>
          <li>
              <label for="q2">What kind of pet do I have?</label>
              <select name="pet" id="q2">
                  <option value="">-- Please select an option --</option>
                  <option value="bird">Bird</option>
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                  <option value="lizard">Lizard</option>
              </select>
          </li>
          <li>
              <label for="q3">What is my lucky number?</label>
              <select name="lucky-number" id="q3">
                  <option value="">-- Please select an option --</option>
                  <option value="13">13</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="28">28</option>
              </select>
          </li>
          <li>
              <label for="q4">What is my favorite food?</label>
              <select name="food" id="q4">
                  <option value="">-- Please select an option --</option>
                  <option value="tacos">Tacos</option>
                  <option value="sushi">Sushi</option>
                  <option value="pizza">Pizza</option>
                  <option value="salad">Salad</option>
              </select>
          </li>
          <li>
              <label for="q5">What is my favorite hobby?</label>
              <select name="hobby" id="q5">
                  <option value="">-- Please select an option --</option>
                  <option value="eating">Eating</option>
                  <option value="sleeping">Sleeping</option>
                  <option value="climbing">Rock Climbing</option>
                  <option value="diving">Diving</option>
                  ${firstTry ? '' : hiddenOption}
              </select>
          </li>
      </ul>
      <button id="submit-game" onclick="answers()">Let's see how well you did...</button>
  </div>`;
  if($('game')) {
    $('game').remove();
  }
  space.innerHTML += q;
}

function resetGame() {
  $('qa').remove();
  loadGame();
}

function answers() {
  let space = $('quiz');
  let sum = 0;
  let answers = [];
  const correct = ['squirtle', 'dog', '13', 'sushi', 'coding'];
  for (let i = 0; i < 5; i++) {
    answers[i] = $(`q${i+1}`).value;
    if (answers[i] === correct[i]) {
      sum++;
    }
  }
  let a1 = $('q1').value;
  let a2 = $('q2').value;
  let a3 = $('q3').value;
  let a4 = $('q4').value;
  let a5 = $('q5').value;
  let b = '';
  if (firstTry) {
    b = 'Trick question - it\'s ';
  } else {
    b = '';
  }
  let x =
  `<div id="qa">
      <h4>Answer Time...</h4>
      <dl>
          <dt><bold>Favorite Pokemon -</bold></dt>
          <dd>Your Answer: ${a1}</dd>
          <dd>Correct Answer: ${answers[0]}</dd>
          <dt><bold>Pet -</bold></dt>
          <dd>Your Answer: ${a2}</dd>
          <dd>Correct Answer: ${answers[1]}</dd>
          <dt><bold>Lucky Number -</bold></dt>
          <dd>Your Answer: ${a3}</dd>
          <dd>Correct Answer: ${answers[2]}</dd>
          <dt><bold>Favorite Food -</bold></dt>
          <dd>Your Answer: ${a4}</dd>
          <dd>Correct Answer: ${answers[3]}</dd>
          <dt><bold>Favorite Hobby -</bold></dt>
          <dd>Your Answer: ${a5}</dd>
          <dd>Correct Answer: ${b}${answers[4]}!!!</dd>
      </dl>
      <p>You got ${sum} out of 5 questions right!</p>
      <button id="retake" onclick="resetGame()">Try again?</button>
  </div>`;
  $('qa').remove();
  space.innerHTML += x;
  firstTry = false;
}

function playGame2() {
  let questions = [['Do I like Pokemon? (yes/no)', 'yes'], ['Do I have any pets? (yes/no)', 'yes'],
    ['Do I live on the East Coast? (yes/no)', 'no'], ['Do I play video games? (yes/no)', 'yes'],
    ['Have I gone skydiving (yes/no)', 'no']];
  let count = 0;
  for(let i = 0; i < 5; i++) {
    let q = '';
    while (!(q === 'yes' || q === 'no')) {
      q = prompt(`${questions[i][0]}`);
      if(typeof q === 'string') {
        q = q.toLowerCase();
      }
    }
    let match = (q === questions[i][1]);
    switch(match) {
      case true:
        console.log(`Question ${i+1}:
        Your response (${q}) is correct!`);
        alert('correct!');
        count++;
        break;
      default:
        console.log(`Question ${i+1}:
        Your response (${q}) is incorrect...`);
        alert('Sorry, incorrect');
    }
  }
  console.log(`You got ${count}/5 correct.`);
}

draw();

function draw() {
  let can = $('canvas-1');
  let ctx = can.getContext('2d');
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(300, 100, 200, 200);
}

function playGame3() {
  let diff = prompt('Input 1, 2, or 3 to play on Easy (1), Medium (2), or Hard (3). Invalid responses will default to Easy.');
  console.log(diff);
  let upper = 25;
  switch(diff) {
    case '2':
      upper = 50;
      break;
    case '3':
      upper = 100;
      break;
  }
  let ans = Math.floor(Math.random() * upper + 1);
  console.log(upper);
  console.log('diff = ' + diff);
  for(let i = 0; i < 4; i++) {
    let guess = Number(prompt(`Guess a number between 1 and ${upper}. You have ${4 - i} guesses remaining.`));
    while(isNaN(guess)) {
      alert('Only number inputs are valid');
      guess = Number(prompt(`Guess a number between 1 and ${upper}. You have ${4 - i} guesses remaining.`));
    }
    if(guess === ans) {
      alert(`You got it correct! It was ${ans}`);
      return;
    } else if(guess < 1 || guess > upper) {
      alert(`Please guess between 1 and ${upper}. You wasted a guess.`);
    } else if(guess > ans) {
      alert('Too high!');
    } else {
      alert('Too low!');
    }
  }
  alert(`You are out of guesses. The answer was ${ans}. Sorry, better luck next time!`);
}

function playGame4() {
  let diff = prompt('Input 1, 2, or 3 to play on Easy (1), Medium (2), or Hard (3). Invalid responses will default to Easy.');
  console.log(diff);
  let upper = 25;
  switch(diff) {
    case '2':
      upper = 50;
      break;
    case '3':
      upper = 100;
      break;
  }
  let numAnswers = 5;
  let answers = Array(numAnswers);
  for (let i = 0; i < numAnswers; i++) {
    let a;
    let check = true;
    do {
      let exists = false;
      a = Math.floor(Math.random() * upper + 1);
      // console.log(a);
      for (let j = 0; j < numAnswers; j++) {
        if (a === answers[j]) {
          exists = true;
          break;
        }
      }
      check = exists;
    } while(check);
    answers[i] = a;
  }
  console.log('Upper: ' + upper);
  // console.log('diff = ' + diff);
  let maxGuesses = 6;
  let myGuesses = [];
  for(let i = 0; i < maxGuesses; i++) {
    let guess = Number(prompt(`Guess a number between 1 and ${upper}. You have ${maxGuesses - i} guesses remaining.`));
    while(isNaN(guess)) {
      alert('Only number inputs are valid');
      guess = Number(prompt(`Guess a number between 1 and ${upper}. You have ${maxGuesses - i} guesses remaining.`));
    }
    myGuesses.push(guess);
    if(guess < 1 || guess > upper) {
      alert(`Please guess between 1 and ${upper}. You wasted a guess.`);
    } else if(answers.includes(guess)) {
      alert(`You got it correct! Possible answers were ${answers}
      You got it in ${i + 1} guesses.`);
      return;
    } else {
      alert('Sorry! Not quite');
    }
  }
  alert(`You are out of guesses.Sorry, better luck next time!
  Your guesses were ${myGuesses}.
  Possible answers were ${answers}.`);
}
