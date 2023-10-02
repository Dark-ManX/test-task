/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param step: {Number}
 * @returns {String}
 */
module.exports.createString = function createString(x, y, step) {
    // Your implementation here
    let string = "";
    for (let i = x; i <= y; i += step) {
        i === y ? (string += i) : (string += i + " ");
    }
    return string;
    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum1 = function rangeSum1(x, y) {
    // Your implementation here
    let result = 0;
    for (let i = x; i <= y; i += 1) {
        if (i > 1) {
            for (let j = x; j < i; j += 1) {
                result += j;
            }
        }
        result += i;
    }
    return result;
    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum2 = function rangeSum2(x, y) {
    // Your implementation here
    let result = 0;
    for (let i = x; i <= y; i += 1) {
        result += i;
    }
    return result;
    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @returns {String}
 */
module.exports.seriesSum = function seriesSum(x) {
    // Your implementation here
    let result = 0;

    for (let i = 0; i < x; i += 1) {
        let n = 0;
        if (x === 0) return `${result.toFixed(2)}`;
        else if (x === 1) return `${(result = 1).toFixed(2)}`;
        n = Math.pow(i + 1, 2);
        console.log(n);
        result += 1 / n;
    }

    return `${result.toFixed(2)}`;
    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @returns {Number}
 */
module.exports.countDigits = function countDigits(x) {
    // Your implementation here
    return x.toString().length;
    throw new Error("Task not implemented");
};
