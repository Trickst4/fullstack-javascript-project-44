import mainEngine from '../index.js';
import randomIntFromInterval from '../randomizer.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const startRound = () => {
  const question = randomIntFromInterval(0, 100);
  const correctAnswer = isEven(question);

  return [question, correctAnswer];
};

const startEvenGame = () => mainEngine(startRound, description);

export default startEvenGame;
