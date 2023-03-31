/**
 * Takes a string an returns it reversed
 *
 * @param {String} string - string to be reversed
 * @returns - a reversed string
 */
function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("Please pass string as parameter");
  }

  let revString = "";
  //Append each characters withing string starting from last index
  for (let i = string.length - 1; i >= 0; i--) {
    revString += string[i];
  }

  return revString;
}

export { reverseString };
