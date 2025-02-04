import readlineSync from 'readline-sync';

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundCount = 2;
  for (let i = 0; i <= roundCount; i += 1) {
    const randomNumber = randomIntFromInterval(0, 100);
    const questionRight = isEven(randomNumber);

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (questionRight === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${questionRight}.`);
      console.log(`Let try again ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startEvenGame;
