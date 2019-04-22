// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   const res = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const a = res[i - 1]; // first time loop runs out , 0
//     const b = res[i - 2]; // 1
//     res.push(a + b);
//   }
//   return res[n];
//   // return res[res.length - 1];
// }
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
