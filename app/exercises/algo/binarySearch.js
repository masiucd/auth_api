/* eslint-disable prefer-const */
function binarysearch(arr, target) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === arr[middleIndex]) {
      return console.log(`Target was found at index ${middleIndex}`);
    }
    if (target > arr[middleIndex]) {
      console.log('Searching the right side of Array');
      startIndex = middleIndex + 1;
    }
    if (target < arr[middleIndex]) {
      console.log('Searching the left side of array');
      endIndex = middleIndex - 1;
    } else {
      console.log('Not Found this loop iteration. Looping another iteration.');
    }
  }

  console.log('Target value not found in array');
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarysearch(array, 10));
