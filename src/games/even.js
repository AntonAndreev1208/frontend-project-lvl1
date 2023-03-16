#!/usr/bin/env node
import playGame from '../index.js';
import { getRandomNumber } from '../getRandomNumber.js';

const minRange = 0;
const maxRange = 100;

const isEven = (number) => (number % 2 === 0);

const generateData = () => {
  const number = getRandomNumber(minRange, maxRange);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

function playEvenGame() {
  playGame(gameMessage, generateData);
}

export default playEvenGame;
