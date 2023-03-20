#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const minSeries = 1;
const maxSeries = 100;
const minStep = 1;
const maxStep = 10;
const length = 10;

const getProgression = (start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateData = () => {
  const start = getRandomNumber(minSeries, maxSeries);
  const step = getRandomNumber(minStep, maxStep);
  const progression = getProgression(start, step, length);
  const indexHiddenNumber = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[indexHiddenNumber].toString();
  progression[indexHiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const gameMessage = 'What number is missing in the progression?';

function playProgressionGame() {
  playGame(gameMessage, generateData);
}

export default playProgressionGame;
