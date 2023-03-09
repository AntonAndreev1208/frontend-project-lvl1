#!/usr/bin/env node
import playGame from '../index.js';

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

const gameMessage = 'What is the result of the expression?';

const generateData = () => {
  const expression = randomExpression();
  const answer = correctAnswer(expression);
  return [expression, answer];
};

function startGame() {
  playGame(gameMessage, generateData, (answer) => answer);
}

export default startGame;
