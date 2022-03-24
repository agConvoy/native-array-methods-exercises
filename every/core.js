// Check to see if all elements in an array
// are even numbers.
const numArr = [1, 2, 3, 4, 5, 6];
const evenNumArr = [2, 4, 6, 8, 10];

const isEven = (currVal) => currVal % 2 == 0;

console.log(numArr.every(isEven));
console.log(evenNumArr.every(isEven));

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input;
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input;
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  return input;
}

// module.exports = {
//   allEven,
//   allSameType,
//   positiveMatrix,
//   allSameVowels
// };
