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

const askQuestion = (question, correctAnswer, name) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correct = correctAnswer.toString();
  if (userAnswer === correct) {
    console.log('Correct!');
    return true;
  }
  promptWrongAnswer(userAnswer, correct, name);
  return false;
};
export { askName, congratulatePlayer, promptWrongAnswer, askQuestion };
