// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   // make a midpoint index
//   const middle = Math.floor((n * 2 - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     // this make the the left and right not to be filld in!
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (middle - row <= col && middle + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    // next row!
    return pyramid(n, row + 1);
  }
  const middle = Math.floor((2 * n - 1) / 2);
  let add;
  if (middle - row <= level.length && middle + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

function test(n, row = 0, steps = '') {
  if (row === n) {
    return;
  }
  if (steps.length === n * 2 - 1) {
    console.log(steps);
    return test(n, row + 1);
  }
  const middle = Math.floor((n * 2 - 1) / 2);
  let add;
  if (middle - row < steps.length && middle + row > steps.length) {
    add = '#';
  } else {
    add = ' ';
  }
  test(n, row, steps + add);
}

console.log(test(10));

module.exports = pyramid;
