#!/usr/bin/env node
import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const greatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
};

const play = (playerName) => {
  console.log('Find the greatest common divisor of given numbers.');
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    console.log(`Question: ${num1} ${num2}`);
    const correctAnswer = greatestCommonDivisor(num1, num2);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

const main = () => {
  const playerName = askName();
  play(playerName);
};

main();
