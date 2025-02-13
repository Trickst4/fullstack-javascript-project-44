import mainEngine from '../index.js';
import { randomIntFromInterval } from '../randomizer.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const startRound = () => {
  const num = randomIntFromInterval(0, 100);
  const question = String(num);
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startEvenGame = () => mainEngine(startRound, description);

export default startEvenGame;
