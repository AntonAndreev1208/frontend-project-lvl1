#!/usr/bin/env node
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getName = () => new Promise((resolve, reject) => {
  rl.question('May I have your name? ', (answer) => {
    if (answer) {
      resolve(answer);
    } else {
      reject(new Error('Name not provided'));
    }
  });
});

const playGame = (name) => {
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;
  const maxCorrectAnswers = 3;

  const playRound = () => {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    rl.question('Your answer: ', (answer) => {
      if (
        (answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 !== 0)
      ) {
        console.log('Correct!');
        correctAnswers += 1;
        if (correctAnswers === maxCorrectAnswers) {
          console.log(`Congratulations, ${name}!`);
          rl.close();
        } else {
          playRound();
        }
      } else {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was '${
            number % 2 === 0 ? 'yes' : 'no'
          }'.`,
        );
        console.log(`Let's try again, ${name}!`);
        rl.close();
      }
    });
  };

  playRound();
};

console.log('Welcome to the Brain Games!');
getName()
  .then(playGame)
  .catch((error) => {
    console.log(error);
    rl.close();
  });
