#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const operators = ['+', '-', '*'];
const minSeries = 0;
const maxSeries = 50;

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error('Unknown operator!');
  }
};

const generateData = () => {
  const number1 = getRandomNumber(minSeries, maxSeries);
  const number2 = getRandomNumber(minSeries, maxSeries);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [question, correctAnswer];
};

const gameMessage = 'What is the result of the expression?';

function playCalcGame() {
  playGame(gameMessage, generateData);
}

export default playCalcGame;
