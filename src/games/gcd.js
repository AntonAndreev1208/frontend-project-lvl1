#!/usr/bin/env node
import playGame from '../index.js';

const randomExpression = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const correctAnswer = (a, b) => {
  if (b === 0) {
    return a;
  }
  return correctAnswer(b, a % b);
};

const gameMessage = 'Find the greatest common divisor of given numbers';

const generateData = () => {
  const a = randomExpression();
  const b = randomExpression();
  const answer = correctAnswer(a, b);
  return [`${a} ${b}`, answer];
};

function play() {
  playGame(gameMessage, generateData, (answer) => answer);
}

export default play;
