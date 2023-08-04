const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
// first is assigned the value 2 from the array numbers.
// second is assigned the value 5 from the array numbers.
// third is assigned the value 2 from the array numbers.
// When comparing the values:

// first == second compares 2 with 5, and they are not equal, so the output is false.
// first == third compares 2 with 2, and they are equal, so the output is true.
