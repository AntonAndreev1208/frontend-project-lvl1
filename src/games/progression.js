#!/usr/bin/env node
import playGame from '../index.js';
import { getRandomNumber, getRandomIndex } from '../getRandomNumber.js';

const minSeries = 1;
const maxSeries = 100;
const minStep = 1;
const maxStep = 10;
const length = 10;

const giveProgression = (start, step) => {
  const progression = [];
  for (let i = start; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const generateData = () => {
  const start = getRandomNumber(minSeries, maxSeries);
  const step = getRandomNumber(minStep, maxStep);
  const progression = giveProgression(start, step, length);
  const indexHiddenNumber = getRandomIndex(progression);
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
