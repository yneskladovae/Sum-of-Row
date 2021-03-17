'use strict'

function range(min, max) {
  const maxNumber = Number.MAX_SAFE_INTEGER;
  const sum = (max * (max + 1) - (min - 1) * min) / 2;

  if (sum > maxNumber) {
    throw new Error('Error. The result is greater than Number.MAX_SAFE_INTEGER');
  } else if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Error. Type of input is not a number. Please, enter a number.');
  } else if (Number.isNaN(min) || Number.isNaN(max)) {
    throw new Error('Error. Type of input is NaN. Please, enter a number.');
  } else if (!Number.isInteger(min) || !Number.isInteger(max) ) {
    throw new Error('Error. Type of input is not integer number');
  } else if (min >= max) {
    throw new Error('Error. Wrong range. Second number should be greater than first');
  } else if (min < 1 || max < 2) {
    throw new Error('Error. Wrong range. Numbers should be positive.');
  } 

  return sum;

}

console.log(range(1, 100000000000000000000000000000000000000));
console.log(range(1, 100000000));
console.log(range(1, 'gfhgh'));
console.log(range(1, NaN));