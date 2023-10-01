/**
 *
 * @param number1: {Number}
 * @param number2: {Number}
 * @param number3: {Number}
 * @returns {Number}
 */
module.exports.getMin = function getMin(number1, number2, number3) {
    // Your implementation here
    return Math.min(number1, number2, number3);
    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.evenOrOdd = function evenOrOdd(x, y, z) {
    // Your implementation here
    if (x % 2 === 0 && y % 2 === 0 && z % 2 === 0) return "even";
    else if (x % 2 !== 0 && y % 2 !== 0 && z % 2 !== 0) return "odd";
    return "even/odd";
    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.inOrOutRange = function inOrOutRange(x, y, z) {
    // Your implementation here
    return x <= z && y >= z ? "In range" : "Out of range";
    throw new Error("Task not implemented");
};
