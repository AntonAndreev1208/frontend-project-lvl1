#!/usr/bin/env node
import playGame from '../index.js';

const randomExpression = (length) => {
  const progression = [];
  const start = Math.floor(Math.random() * 50);
  const step = Math.floor(Math.random() * 10) + 1;

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const correctAnswer = (progression) => {
  const newProgression = [...progression];
  const index = Math.floor(Math.random() * newProgression.length);
  const hiddenElement = newProgression[index];
  newProgression[index] = '..';
  return [newProgression.join(' '), hiddenElement];
};

const gameMessage = 'What number is missing in the progression?';

const generateData = () => {
  const progression = randomExpression(10);
  const [question, answer] = correctAnswer(progression);
  return [question, String(answer)];
};

function startGame() {
  playGame(gameMessage, generateData, (answer) => answer);
}

export default startGame;
