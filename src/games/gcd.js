#!/usr/bin/env node
import playGame from '../index.js';
import { getRandomNumber } from '../getRandomNumber.js';

const gameMessage = 'Find the greatest common divisor of given numbers.';
const minRange = 0;
const maxRange = 10;

const isGCD = (x, y) => (y === 0 ? x : isGCD(y, x % y));

const generateData = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const question = `${number1} ${number2}`;
  const correctAnswer = isGCD(number1, number2).toString();
  return [question, correctAnswer];
};

function playGcdGame() {
  playGame(gameMessage, generateData);
}

export default playGcdGame;
