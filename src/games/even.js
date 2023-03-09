#!/usr/bin/env node
import playGame from '../index.js';

const correctAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const randomExpression = () => {
  const question = Math.floor(Math.random() * 100);
  return [question];
};

const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateData = () => {
  const expression = randomExpression();
  const answer = correctAnswer(expression);
  return [expression, answer];
};

function playEvenGame() {
  playGame(gameMessage, generateData, (answer) => answer);
}

export default playEvenGame;
