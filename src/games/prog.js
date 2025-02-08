import mainEngine from '../index.js';
import { randomIntFromInterval, randomSymbol } from '../randomizer.js';

const description = 'What number is missing in the progression?';

const makeProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i !== length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const startRound = () => {
  const start = randomIntFromInterval(1, 30);
  const step = randomIntFromInterval(2, 10);
  const length = 10;
  const progression = makeProgression(start, step, length);
  const hiddenNum = randomSymbol(progression);
  const correctAnswer = String(progression.splice(hiddenNum, 1, '..'));
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startProgGame = () => mainEngine(startRound, description);

export default startProgGame;
