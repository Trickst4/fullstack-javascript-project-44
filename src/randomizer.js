function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomSymbol = (data) => Math.floor(Math.random() * data.length);

export { randomIntFromInterval, randomSymbol };
