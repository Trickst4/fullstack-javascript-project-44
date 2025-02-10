import mainEngine from '../index.js';
import { randomIntFromInterval } from '../randomizer.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const limit = Math.sqrt(num);

  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const startRound = () => {
  const num = randomIntFromInterval(0, 30);
  const question = String(num);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startPrimeGame = () => mainEngine(startRound, description);

export default startPrimeGame;
