#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askName, congratulatePlayer, promptWrongAnswer } from '../welcome.js';

const runGame = () => {
  const name = askName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log("Let's start the game!");
  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    let isPrime = true;
    if (number === 1) {
      isPrime = false;
    } else {
      for (let i = 2; i <= number / 2; i += 1) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      promptWrongAnswer(answer, correctAnswer, name);
      break;
    }
  }
  if (correctAnswerCount === 3) {
    congratulatePlayer(name);
  }
};
export default runGame;
