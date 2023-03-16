#!/usr/bin/env node
import playGame from '../index.js';
import { getRandomNumber, getRandomIndex } from '../getRandomNumber.js';

const gameMessage = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minRange = 0;
const maxRange = 50;

const getGoodAnswer = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return null;
  }
};

const generateData = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const operator = operators[getRandomIndex(operators)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = getGoodAnswer(number1, number2, operator).toString();
  return [question, correctAnswer];
};

function playCalcGame() {
  playGame(gameMessage, generateData);
}

export default playCalcGame;
