#!/usr/bin/env node
import playGame from '../index.js';
import { getRandomNumber } from '../getRandomNumber.js';

const minSeries = 0;
const maxSeries = 100;

const getGoodAnswer = (number) => {
  const limit = Math.sqrt(number);
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateData = () => {
  const number = getRandomNumber(minSeries, maxSeries);
  const question = number.toString();
  const correctAnswer = getGoodAnswer(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function playPrimeGame() {
  playGame(gameMessage, generateData);
}

export default playPrimeGame;
