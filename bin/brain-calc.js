#!/usr/bin/env node
import readlineSync from 'readline-sync';

const name = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
console.log(`Hello, ${name}!`);

const operations = ['+', '-', '*'];
const randomExpression = () => {
  const num1 = Math.floor(Math.random() * 50);
  const num2 = Math.floor(Math.random() * 50);
  const operation = operations[Math.floor(Math.random() * operations.length)];
  return `${num1} ${operation} ${num2}`;
};

const correctAnswer = (expression) => {
  const [num1, operation, num2] = expression.split(' ');
  switch (operation) {
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    case '*':
      return Number(num1) * Number(num2);
    default:
      return null;
  }
};

const playGame = (roundsCount) => {
  for (let i = 1; i <= roundsCount; i += 1) {
    const expression = randomExpression();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correct = correctAnswer(expression);
    if (userAnswer === String(correct)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

playGame(3);
