import readlineSync from 'readline-sync';

const playGame = (gameMessage, generateData) => {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameMessage);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = generateData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default playGame;
