// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
function reverse2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}
function reverse3(str) {
  let reversedStr = '';
  for (const char of str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}
function reverse4(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
