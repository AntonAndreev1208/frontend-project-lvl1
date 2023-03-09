#!/usr/bin/env node
import playGame from '../welcome.js';

const correctAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const randomExpression = () => {
  const question = Math.floor(Math.random() * 100);
  return [question];
};

const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

function playEvenGame() {
  playGame(gameMessage, randomExpression, correctAnswer);
}

export default playEvenGame;
