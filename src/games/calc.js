#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askName, congratulatePlayer, promptWrongAnswer } from '../welcome.js';

const operations = ['+', '-', '*'];

const randomExpression = () => {
  const num1 = Math.floor(Math.random() * 50);
  const num2 = Math.floor(Math.random() * 50);
  const operation = operations[Math.floor(Math.random() * operations.length)];
  return `${num1} ${operation} ${num2}`;
};

const correctAnswer = (expression) => {
  const [num1, operation, num2] = expression.split(' ');
  switch (operation) {
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    case '*':
      return Number(num1) * Number(num2);
    default:
      return null;
  }
};

const playGame = (roundsCount) => {
  const name = askName();
  console.log('What is the result of the expression?');
  for (let i = 1; i <= roundsCount; i += 1) {
    const expression = randomExpression();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correct = correctAnswer(expression).toString();
    if (userAnswer === correct) {
      console.log('Correct!');
    } else {
      promptWrongAnswer(userAnswer, correct, name);
      return;
    }
  }
  congratulatePlayer(name);
};

export default playGame;
