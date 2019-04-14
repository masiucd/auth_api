// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  function buildCharMap(str) {
    const charMap = {};
    for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  }
  const aStrMap = buildCharMap(stringA);
  const bStrMap = buildCharMap(stringB);
  if (Object.keys(aStrMap).length !== Object.keys(bStrMap).length) {
    return false;
  }
  return true;
}

function anagrams2(str1, str2) {
  function checkAnagram(str) {
    return str
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }

  return checkAnagram(str1) === checkAnagram(str2);
}

function anagrams3(str1, str2) {
  function bubbleSort(str) {
    const strArr = str
      .toLowerCase()
      .replace(/[^\w]/g, '')
      .split('');
    for (let i = 0; i < strArr.length; i++) {
      for (let j = 0; j < strArr.length; j++) {
        if (strArr[j] > strArr[j + 1]) {
          const temp = strArr[j];
          strArr[j] = strArr[j + 1];
          strArr[j + 1] = temp;
        }
      }
    }
    return strArr.join('');
  }
  return bubbleSort(str1) === bubbleSort(str2);
}

module.exports = anagrams;
