//Constructor
function Calculator() {}

//Object methods

/**
 * Adds two numbers
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns - sum of two numbers
 */
Calculator.prototype.add = function (num1, num2) {
  this.checkNum(num1, num2);
  return this.formatResult(num1 + num2);
};

/**
 * Subtracts two numbers
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns - difference of two numbers
 */
Calculator.prototype.subtract = function (num1, num2) {
  this.checkNum(num1, num2);
  return this.formatResult(num1 - num2);
};

/**
 * Divides two numbers
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns - quotient of two numbers
 */
Calculator.prototype.divide = function (num1, num2) {
  this.checkNum(num1, num2);
  return this.formatResult(num1 / num2);
};

/**
 * Multiplies numbers
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns - product of two numbers
 */
Calculator.prototype.multiply = function (num1, num2) {
  this.checkNum(num1, num2);
  return this.formatResult(num1 * num2);
};

/**
 * Checks if two values are of type number
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 */
Calculator.prototype.checkNum = function (num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Please pass in two number parameters");
  }
};

/**
 * Formats a number up to 4 decimals places
 * 
 * @param {Number} num 
 * @returns - formatted number
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
