#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askName, congratulatePlayer, promptWrongAnswer } from '../welcome.js';

const getProgression = (length) => {
  const start = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * 10);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const playProgressionGame = () => {
  const userName = askName();
  console.log('What number is missing in the progression?');
  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const progression = getProgression(10);
    const hiddenElementIndex = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[hiddenElementIndex];
    progression[hiddenElementIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      promptWrongAnswer(userAnswer, correctAnswer, userName);
      return;
    }
  }
  congratulatePlayer(userName);
};

export default playProgressionGame;
