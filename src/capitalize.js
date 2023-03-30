/**
 * Takes a string and returns it with the first character
 * within the string capitalized.
 * 
 * @param {String} string - String to be read 
 * @returns - string with first character capatilized
 */
function capitalize(string) {
  //After trimming, if length of string is 0 assume string is empty 
  if(!string.trim().length){
    return string;
  }

  //Get the first alphabetical character within string
  let firstLetter = string.match(/[\w]/);
  
  //If alphabetical character was found...
  if(firstLetter){
    //Capitalize it
    firstLetter = firstLetter[0].toUpperCase();
  } else {
    //Return original string
    return string;
  } 

  //Replace first character in string
  let newString = string.replace(/[\w]/, firstLetter);

  return newString;
}

export { capitalize };
