// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const mapChar = {};
  let maxChar = 0;
  let wordChar = '';

  for (const char of str) {
    if (mapChar[char]) {
      mapChar[char]++;
    } else {
      mapChar[char] = 1;
    }
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const char in mapChar) {
    if (mapChar[char] > maxChar) {
      maxChar = mapChar[char];
      wordChar = char;
    }
  }
  return wordChar;
}

console.log(maxChar('hello world'));

module.exports = maxChar;
