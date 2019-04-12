// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('');
  return reversed === str;
}
function palindrome2(str) {
  const re = /[\W_]/g;
  const strToLower = str.toLowerCase().replace(re, '');
  const revered = strToLower
    .split('')
    .reverse()
    .join('');
  return revered === str;
}
function palindrome3(str) {
  const re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = palindrome;
