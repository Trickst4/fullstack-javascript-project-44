import mainEngine from '../index.js';
import randomIntFromInterval from '../randomizer.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b !== 0 ? gcd(b, a % b) : a);

const startRound = () => {
  const num1 = randomIntFromInterval(0, 50);
  const num2 = randomIntFromInterval(0, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));

  return [question, correctAnswer];
};

const startGcdGame = () => mainEngine(startRound, description);

export default startGcdGame;
