#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?');

const getProgression = (length) => {
  const start = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * 10);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const game = (rounds) => {
  for (let i = 0; i < rounds; i += 1) {
    const progression = getProgression(10);
    const hiddenElementIndex = Math.floor(Math.random() * progression.length);
    const answer = progression[hiddenElementIndex];
    progression[hiddenElementIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

game(3);
