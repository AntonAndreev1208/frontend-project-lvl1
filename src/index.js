#!/usr/bin/env node
import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const askQuestion = (question, correctAnswer, name) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correct = correctAnswer.toString();
  if (userAnswer === correct) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const playGame = (gameMessage, generateData) => {
  const name = askName();
  const roundsCount = 3;
  console.log(gameMessage);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, answer] = generateData();
    if (!askQuestion(question, answer, name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
