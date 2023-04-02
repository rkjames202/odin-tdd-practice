/**
 * Finds the average value in an array of numbers.
 *
 * @param {Array} arr - Array of numbers
 * @returns - Average value of array
 */
function findAverage(arr) {
  let average = arr.reduce((a, b) => a + b, 0) / arr.length;
  average = parseFloat(average.toFixed(2));

  return average;
}

/**
 * Finds the minimum value in an array of numbers.
 *
 * @param {Array} arr - Array of numbers
 * @returns - Minimum value of array
 */
function findMin(arr) {
  return Math.min(...arr);
}

/**
 * Find the maximum value in an array of numbers.
 *
 * @param {Array} arr - Array of numbers
 * @returns - Maximum value of array
 */
function findMax(arr) {
  return Math.max(...arr);
}

/**
 * Checks an array seeing if every element is a number.
 * 
 * @param {Array} arr - Array of numbers
 * @returns - If every element in array is a number
 */
function validateArr(arr) {
  return arr.every((val) => {
    return typeof val === "number";
  });
}

/**
 * Takes an array of numbers and creates an object containing
 * the length of the array along with the average, minimum, and maximum
 * values.
 *
 * @param {Array} arr - Array of numbers
 * @returns - An object containing data about the array
 */
function analyzeArray(arr) {
  if (!validateArr(arr)) {
    throw new Error("All values inside of array must be a number.");
  }

  //Get all necessary information about array
  let average = findAverage(arr);
  let min = findMin(arr);
  let max = findMax(arr);
  let length = arr.length;

  return { average, min, max, length };
}

export { analyzeArray };
