const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (data) => Math.floor(Math.random() * data.length);

export { getRandomNumber, getRandomIndex };
