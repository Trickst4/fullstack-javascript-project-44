import readlineSync from 'readline-sync';

const mainEngine = (getData, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  const roundCount = 2;

  for (let i = 0; i <= roundCount; i += 1) {
    const [question, correctAnswer] = getData();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let try again ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default mainEngine;
