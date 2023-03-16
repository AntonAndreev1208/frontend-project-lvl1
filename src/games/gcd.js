#!/usr/bin/env node
import playGame from '../index.js';
import { getRandomNumber } from '../getRandomNumber.js';

const minSeries = 0;
const maxSeries = 10;

const isGCD = (x, y) => (y === 0 ? x : isGCD(y, x % y));

const generateData = () => {
  const number1 = getRandomNumber(minSeries, maxSeries);
  const number2 = getRandomNumber(minSeries, maxSeries);
  const question = `${number1} ${number2}`;
  const correctAnswer = isGCD(number1, number2).toString();
  return [question, correctAnswer];
};

const gameMessage = 'Find the greatest common divisor of given numbers.';

function playGcdGame() {
  playGame(gameMessage, generateData);
}

export default playGcdGame;
