#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askName, congratulatePlayer, promptWrongAnswer } from '../welcome.js';

const isEven = (num) => num % 2 === 0;

const generateQuestionAndAnswer = () => {
  const question = Math.floor(Math.random() * 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const playEvenGame = () => {
  const name = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== correctAnswer) {
      promptWrongAnswer(playerAnswer, correctAnswer, name);
      return;
    }
    console.log('Correct!');
    correctAnswersCount += 1;
  }
  congratulatePlayer(name);
};

export default playEvenGame;
