// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const capArr = str.toLowerCase().split(' ');
  for (let i = 0; i < capArr.length; i++) {
    capArr[i] = capArr[i].slice(0, 1).toUpperCase() + capArr[i].slice(1);
  }
  return capArr.join(' ');
}

function capitalize2(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(cap => cap.charAt(0).toUpperCase() + cap.slice(1))
    .join(' ');
}

function capitalize3(str) {
  return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

console.log(capitalize3('a short sentence'));
console.log(capitalize3('a lazy fox'));
console.log(capitalize3('look, it is working!'));

module.exports = capitalize;
