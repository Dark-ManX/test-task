/**
 *
 * @param number1: {Number}
 * @param nunber2: {Number}
 * @returns {Number}
 */
module.exports.getSum = function getSum(number1, number2) {
  // Your implementation here
  return number1 + number2 === Math.round(number1 + number2)
    ? number1 + number2
    : Number((number1 + number2).toFixed(1));
  throw new Error("Task not implemented");
};

/**
 *
 * @param name: {String}
 * @param surname: {String}
 * @param age: {Number}
 * @returns {String}
 */
module.exports.greeting = function greeting(name, surname, age) {
  // Your implementation here
  return `Hello, my name is ${name} ${surname} and I am ${age} years old.`;
  throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @returns {Boolean}
 */
module.exports.isSquare = function isSquare(x) {
  return Math.sqrt(x) === Math.round(Math.sqrt(x)) ? true : false;
  // Your implementation here

  throw new Error("Task not implemented");
};
