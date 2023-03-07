#!/usr/bin/env node
import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const congratulatePlayer = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const promptWrongAnswer = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

const askQuestion = (question, correctAnswer, name) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correct = correctAnswer.toString();
  if (userAnswer === correct) {
    console.log('Correct!');
    return true;
  }
  promptWrongAnswer(userAnswer, correct, name);
  return false;
};

const playGame = (gameMessage, randomExpression, correctAnswer) => {
  const name = askName();
  const roundsCount = 3;
  console.log(gameMessage);
  for (let i = 1; i <= roundsCount; i += 1) {
    const expression = randomExpression();
    if (!askQuestion(expression, correctAnswer(expression), name)) {
      return;
    }
  }
  congratulatePlayer(name);
};

export default playGame;
