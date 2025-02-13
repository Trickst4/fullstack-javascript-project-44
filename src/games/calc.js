import mainEngine from '../index.js';
import { randomIntFromInterval, randomSymbol } from '../randomizer.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Invalid operator - '${operator}'!`);
  }
};

const startRound = () => {
  const num1 = randomIntFromInterval(0, 10);
  const num2 = randomIntFromInterval(0, 10);
  const operator = operators[randomSymbol(operators)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));

  return [question, correctAnswer];
};

const startCalcGame = () => mainEngine(startRound, description);

export default startCalcGame;
