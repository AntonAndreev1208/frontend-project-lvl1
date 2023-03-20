#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const minSeries = 0;
const maxSeries = 10;

const findGCD = (x, y) => (y === 0 ? x : findGCD(y, x % y));

const generateData = () => {
  const number1 = getRandomNumber(minSeries, maxSeries);
  const number2 = getRandomNumber(minSeries, maxSeries);
  const question = `${number1} ${number2}`;
  const correctAnswer = findGCD(number1, number2).toString();
  return [question, correctAnswer];
};

const gameMessage = 'Find the greatest common divisor of given numbers.';

function playGcdGame() {
  playGame(gameMessage, generateData);
}

export default playGcdGame;
