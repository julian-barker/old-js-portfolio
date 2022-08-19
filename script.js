'use strict';

//declare shortcut function
function $(x) {
  return document.getElementById(x);
}

// scroll to top on reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

let user;
// ensure content exists to insert into
window.onload = function() {
  greet();
  draw();
  playGameFull();
};





// greet user upon visiting the site
function greet() {
  user = prompt('Please tell me your name.');
  while(!user) {
    user = prompt('C\'mon, just tell me.');
  }
  console.log('Name: ' + user);
  const block = $('user');
  block.innerHTML += user;
  alert(`Welcome, ${user}!`);
}





// game version 1 (as prescribed by reqs, prompted at page load)
// 7 questions with a total score at the end
// const upper = 25;
// const questions = [
//   ['Do I like Pokemon? (yes/no)', 'yes'],
//   ['Do I have any pets? (yes/no)', 'yes'],
//   ['Do I live on the East Coast? (yes/no)', 'no'],
//   ['Do I play video games? (yes/no)', 'yes'],
//   ['Have I gone skydiving (yes/no)', 'no'],
//   ['Guess a number between 1 and 25', Math.floor(Math.random() * upper + 1)],
//   ['Guess my favorite fruits', ['kiwi', 'pineapple', 'clementine', 'grapes', 'watermelon']]
// ];

// let totalScore = 0;

// for(let i = 0; i < 7; i++) {
//   if(i === 5) {
//     //Question 6
//     let lives = 4;
//     const ans = questions[i][1];
//     let correct = false;
//     while(lives > 0) {
//       let response = parseInt(prompt(`Guess a number between 1 and ${upper}. You have ${lives} guesses remaining.`));
//       while(isNaN(response)) {
//         alert('Only number inputs are valid');
//         response = parseInt(prompt(`Guess a number between 1 and ${upper}. You have ${lives} guesses remaining.`));
//       }
//       if(response === ans) {
//         alert(`You got it correct! It was ${response}`);
//         totalScore++;
//         correct = true;
//         break;
//       } else if(response < 1 || response > upper) {
//         alert(`Please guess between 1 and ${upper}. You wasted a guess.`);
//       } else if(response > ans) {
//         alert('Too high!');
//       } else {
//         alert('Too low!');
//       }
//       lives--;
//     }
//     if(correct === false) {
//       alert(`Sorry, out of lives! The correct answer was ${ans}`);
//     }
//   } else if(i === 6) {
//     //Question 7
//     let lives = 6;
//     let correct = false;
//     const answers = questions[i][1];
//     console.log(answers);
//     while(!correct) {
//       while(lives > 0) {
//         let response = prompt(`What is one of my favorite fruits? You have ${lives} guesses remaining.`);
//         for (let ans of answers) {
//           console.log(ans);
//           if(ans === response) {
//             alert(`You got it correct! The correct answers were ${answers}`);
//             totalScore++;
//             correct = true;
//             lives = 0;
//             break;
//           }
//         }
//         lives--;
//       }
//       if(correct === false) {
//         alert(`Sorry, out of lives! Correct answers were ${answers}`);
//         break;
//       }
//     }
//   } else {
//     let response = '';
//     let correct;
//     while (!(response === 'yes' || response === 'no')) {
//       response = prompt(`${questions[i][0]}`);
//       if(typeof response === 'string') {
//         response = response.toLowerCase();
//       }
//     }
//     correct = (response === questions[i][1]);
//     switch(correct) {
//       case true:
//         console.log(`Question ${i+1}:
//         Your response (${response}) is correct!`);
//         alert('correct!');
//         totalScore++;
//         console.log(totalScore);
//         break;
//       default:
//         console.log(`Question ${i+1}:
//         Your response (${response}) is incorrect...`);
//         alert('Sorry, incorrect');
//     }
//     if(i === 4) {
//       let msg = `You got ${totalScore}/5 correct.`;
//       console.log(msg);
//       alert(msg);
//     }
//   }
// }
// alert(`Your total score is ${totalScore}/7!`);








function draw() {
  let can = $('canvas-1');
  let ctx = can.getContext('2d');
  let x = 0;
  let y = 0;
  let gradient = ctx.createLinearGradient(x, y, 800, 300);
  gradient.addColorStop(0, 'green');
  gradient.addColorStop(0.5, 'yellow');
  gradient.addColorStop(1, 'red');
  ctx.fillStyle = gradient;
  ctx.textAlign = 'center';
  ctx.fillRect(100, 250, 600, 100);
  ctx.strokeRect(100, 250, 600, 100);
  ctx.font = ('144px Comic Sans MS');
  ctx.fillText('OooWeee!!!', can.width/2, can.height/2);
  ctx.strokeText('OooWeee!!!', can.width/2, can.height/2);
}








// Multiple choice quiz taking advantage of DOM manipulation
const mcg = {
  space: 'quiz1',
  state: '',
  firstTry: true
};


function switchGameState() {
  switch(mcg.state) {
    case 'mcg-loaded':
      showAnswers();
      break;
    case 'mcg-answers':
      resetGame();
      break;
    default:
      loadGame();
  }
}

function loadGame() {
  const space = $(mcg.space);
  console.log(space);
  mcg.state = 'mcg-loaded';
  let hiddenOption = '<option value="coding">Coding!</option>';
  let newContent =
  `<div id="${mcg.state}">
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
                  ${mcg.firstTry ? '' : hiddenOption}
              </select>
          </li>
      </ul>
      <button id="submit-game" onclick="switchGameState()">Let's see how well you did...</button>
  </div>`;
  if($('game')) {
    $('game').remove();
  }
  space.innerHTML += newContent;
}



function resetGame() {
  $(mcg.state).remove();
  loadGame();
}



function showAnswers() {
  const space = $(mcg.space);
  console.log(space);
  const currState = mcg.state;
  mcg.state = 'mcg-answers';
  let sum = 0;
  let responses = [];
  const answers = ['squirtle', 'dog', '13', 'sushi', 'coding'];
  for (let i = 0; i < 5; i++) {
    responses[i] = $(`q${i+1}`).value;
    if (responses[i] === answers[i]) {
      sum++;
    }
  }
  let a1 = $('q1').value;
  let a2 = $('q2').value;
  let a3 = $('q3').value;
  let a4 = $('q4').value;
  let a5 = $('q5').value;
  let b = '';
  console.log(responses);
  if (mcg.firstTry) {
    b = 'Trick question - it\'s ';
  } else {
    b = '';
  }
  let newContent =
  `<div id="${mcg.state}">
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
      <button id="retake" onclick="switchGameState()">Try again?</button>
  </div>`;
  $(currState).remove();
  space.innerHTML += newContent;
  mcg.firstTry = false;
}








// second implementation of 7-question quiz using functions and starting on button press
function playGameFull() {
  let score1 = playGame2();
  let score2 = playGame3();
  let score3 = playGame4();
  let score = score1 + score2 + score3;
  alert(`${user}, your total score is: ${score}/7.`);
}



function playGame2() {
  let questions = [['Do I like Pokemon? (yes/no)', 'yes'], ['Do I have any pets? (yes/no)', 'yes'],
    ['Do I live on the East Coast? (yes/no)', 'no'], ['Do I play video games? (yes/no)', 'yes'],
    ['Have I gone skydiving (yes/no)', 'no']];
  let score = 0;
  for(let i = 0; i < 5; i++) {
    let q = '';
    while (!(q === 'yes' || q === 'no')) {
      q = prompt(`${questions[i][0]}`);
      if(typeof q === 'string') {
        q = q.toLowerCase();
      }
    }
    let correct = (q === questions[i][1]);
    switch(correct) {
      case true:
        console.log(`Question ${i+1}:
        Your response (${q}) is correct!`);
        alert('correct!');
        score++;
        break;
      default:
        console.log(`Question ${i+1}:
        Your response (${q}) is incorrect...`);
        alert('Sorry, incorrect');
    }
  }
  let msg = `${user}, you got ${score}/5 correct.`;
  console.log(msg);
  alert(msg);
  return score;
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
    let guess = parseInt(prompt(`Guess a number between 1 and ${upper}. You have ${4 - i} guesses remaining.`));
    while(isNaN(guess)) {
      alert('Only number inputs are valid');
      guess = parseInt(prompt(`Guess a number between 1 and ${upper}. You have ${4 - i} guesses remaining.`));
    }
    if(guess === ans) {
      alert(`You got it correct! It was ${ans}`);
      return 1;
    } else if(guess < 1 || guess > upper) {
      alert(`Please guess between 1 and ${upper}. You wasted a guess.`);
    } else if(guess > ans) {
      alert('Too high!');
    } else {
      alert('Too low!');
    }
  }
  alert(`You are out of guesses. The answer was ${ans}. Sorry, better luck next time!`);
  return 0;
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
    let guess = parseInt(prompt(`Guess a number between 1 and ${upper}. You have ${maxGuesses - i} guesses remaining.`));
    while(isNaN(guess)) {
      alert('Only number inputs are valid');
      guess = parseInt(prompt(`Guess a number between 1 and ${upper}. You have ${maxGuesses - i} guesses remaining.`));
    }
    myGuesses.push(guess);
    if(guess < 1 || guess > upper) {
      alert(`Please guess between 1 and ${upper}. You wasted a guess.`);
    } else if(answers.includes(guess)) {
      alert(`You got it correct! Possible answers were ${answers}
      You got it in ${i + 1} guesses.`);
      return 1;
    } else {
      alert('Sorry! Not quite');
    }
  }
  alert(`You are out of guesses.Sorry, better luck next time!
  Your guesses were ${myGuesses}.
  Possible answers were ${answers}.`);
  return 0;
}
