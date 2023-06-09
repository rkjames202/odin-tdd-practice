//Constructor
function Calculator() {}

//Object methods

/**
 * Adds two numbers.
 * 
 * @param {Number} num1 - Left operand
 * @param {Number} num2 - Right operand
 * @returns - Sum of two numbers
 */
Calculator.prototype.add = function (num1, num2) {
  this.checkNum(num1, num2);
  return this.formatResult(num1 + num2);
};

/**
 * Subtracts two numbers.
 * 
 * @param {Number} num1 -Left operand
 * @param {Number} num2  - Right operand
 * @returns - Difference of two numbers
 */
Calculator.prototype.subtract = function (num1, num2) {
  this.checkNum(num1, num2);
  return this.formatResult(num1 - num2);
};

/**
 * Divides two numbers.
 * 
 * @param {Number} num1 - Left operand
 * @param {Number} num2  - Right operand
 * @returns - Quotient of two numbers
 */
Calculator.prototype.divide = function (num1, num2) {
  this.checkNum(num1, num2);
  return this.formatResult(num1 / num2);
};

/**
 * Multiplies numbers.
 * 
 * @param {Number} num1 - Left operand 
 * @param {Number} num2 - Right operand
 * @returns - Product of two numbers
 */
Calculator.prototype.multiply = function (num1, num2) {
  this.checkNum(num1, num2);
  return this.formatResult(num1 * num2);
};

/**
 * Checks if two values are of type number.
 * 
 * @param {Number} num1 - Left operand
 * @param {Number} num2 - Right operand
 */
Calculator.prototype.checkNum = function (num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Please pass in two number parameters");
  }
};

/**
 * Formats a number up to 4 decimals places.
 * 
 * @param {Number} num - Number to be formatted
 * @returns - Formatted number
 */
Calculator.prototype.formatResult = function(num) {
    let formatNum = num;
    //If number has any decimal parts
    if(num % 1 !== 0){
        //parseFloat() will remove any trailing zeros if needed
        formatNum = parseFloat(num.toFixed(4));
    }

    return formatNum;
}

export { Calculator };
