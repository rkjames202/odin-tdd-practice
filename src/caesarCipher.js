/**
 * Creates an array of lowercase alphabetical 
 * characters.
 * 
 * @returns - array of alphabetical characters
 */
function generateAlphabet() {
  //Get the unicode values for 'a' and 'z'
  let i = "a".charCodeAt(0);
  let n = "z".charCodeAt(0);

  let list = [];
  //Starting from a push each letter in the alphabetical to the list
  for (; i <= n; i++) {
    list.push(String.fromCharCode(i));
  }

  return list;
}

/**
 * Tests if a character is alphabetical or not.
 * 
 * @param {String} letter 
 * @returns 
 */
function isAlpha(letter) {
  return /[A-Za-z]/.test(letter);
}

/**
 * Takes a string and a key. The key acts as a shift factor
 * to shift each alphabetical character in the string a number
 * of places.
 * 
 * @param {String} string 
 * @param {Number} key 
 * @returns 
 */
function caesarCipher(string, key) {
  let alphaList = generateAlphabet();

  //String to hold encrypted string
  let encryptString = "";

  //Loop through string to find alphabetical characters
  for (let i = 0; i < string.length; i++) {
    //Append non-alphabetical characters to string
    if (!isAlpha(string[i])) {
      encryptString += string[i];
      continue;
    }

    //Convert to lowercase...
    let tempChar = string[i].toLowerCase();
    //Then find index of character
    let index = alphaList.indexOf(tempChar);

    //Find the 'shifted' index of the character
    let newIndex = (index + key) % 26;

    //Check if character was uppercase in original string
    //This is to keep the casing uniform in encrypted string
    if (string[i] === string[i].toUpperCase()) {
      encryptString += alphaList[newIndex].toUpperCase();
    } else {
      encryptString += alphaList[newIndex];
    }
  }

  //Return encrypted string
  return encryptString;
}

export { caesarCipher };
