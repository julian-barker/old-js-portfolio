function $(x) {
  return document.getElementById(x);
}

let guest = prompt('Please tell me your name.');
console.log('Name: ' + guest);
let block = $('guest');
block.innerHTML += guest;


// function greeting() {
//   let name = prompt('Please tell me your name.');
//   console.log('Name: ' + name);
//   let age = prompt('How old are you?');
//   console.log('Age: ' + age);
//   let home = prompt('Where do you live?');
//   console.log('Home: ' + home);
//   let mood;
//   do {
//     mood = prompt('What is your mood, on a scale from 1-10? (10 being best)');
//   } while(!(mood > 0 && mood <=10));
//   console.log('Mood: ' + mood);
//   let msg = `Greetings, my good friend, ${name}! ${age} years young? Long way to go!
//   ${home} seems like a pretty nice place to live...
//   I would also rate my mood as a ${Math.ceil(mood)}.`;
//   alert(msg);
//   //let block = document.getElementById('greeting');
//   let block = $('greeting');
//   block.innerHTML += msg;
// }
