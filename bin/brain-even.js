#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswerCount = 0;
while (correctAnswerCount < 3) {
  const number = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer !== 'yes' && answer !== 'no') {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was 'no' or 'yes'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }

  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
    correctAnswerCount += 1;
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}

if (correctAnswerCount === 3) {
  console.log(`Congratulations, ${userName}!`);
}
