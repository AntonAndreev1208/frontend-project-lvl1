#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question("What's your name? ");
console.log(`Hello, ${name}!`);

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  const randomNum = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
