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
  //
}

console.log(pyramid(5));
module.exports = pyramid;
