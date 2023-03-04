#!/usr/bin/env node
import readlineSync from 'readline-sync';

const sayName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
export default sayName;
