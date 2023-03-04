#!/usr/bin/env node
import { askName, congratulatePlayer, askQuestion } from '../welcome.js';

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

const playGame = () => {
  const name = askName();
  const roundsCount = 3;
  console.log('What is the result of the expression?');
  for (let i = 1; i <= roundsCount; i += 1) {
    const expression = randomExpression();
    if (!askQuestion(expression, correctAnswer(expression), name)) {
      return;
    }
  }
  congratulatePlayer(name);
};

export default playGame;
