#!/usr/bin/env node
import playGame from '../index.js';

const randomExpression = () => {
  const question = Math.floor(Math.random() * 100) + 1;
  return [question];
};

const correctAnswer = (num) => {
  if (num < 2) return 'no';
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateData = () => {
  const expression = randomExpression();
  const answer = correctAnswer(expression);
  return [expression, answer];
};

function runGame() {
  playGame(gameMessage, generateData, (answer) => answer);
}

export default runGame;
