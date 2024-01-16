function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

/* 
  Add your pseudocode here
  START
  Declare a variable reversed
  Use array methods to reverse the parameter
  Return the reversed string.
  END
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
