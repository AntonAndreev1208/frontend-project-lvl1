#!/usr/bin/env node
import playGame from '../index.js';
import { getRandomNumber, getRandomIndex } from '../getRandomNumber.js';

const gameMessage = 'What number is missing in the progression?';
const minLength = 5;
const maxLength = 10;
const minRange = 1;
const maxRange = 100;
const minStep = 1;
const maxStep = 10;

const giveProgression = (length, start, step) => {
  const progression = [];
  for (let i = start; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const generateData = () => {
  const length = getRandomNumber(minLength, maxLength);
  const start = getRandomNumber(minRange, maxRange);
  const step = getRandomNumber(minStep, maxStep);
  const progression = giveProgression(length, start, step);
  const indexHiddenNumber = getRandomIndex(progression);
  const correctAnswer = progression[indexHiddenNumber].toString();
  progression[indexHiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

function playProgressionGame() {
  playGame(gameMessage, generateData);
}

export default playProgressionGame;
