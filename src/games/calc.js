import mainEngine from '../index.js';
import randomIntFromInterval from '../randomizer.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const randomSymbol = (data) => Math.floor(Math.random() * data.length);

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 'Unexpected symbol';
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
