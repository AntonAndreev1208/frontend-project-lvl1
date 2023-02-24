#!/usr/bin/env node
import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const congratulatePlayer = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const promptWrongAnswer = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

export { askName, congratulatePlayer, promptWrongAnswer };
