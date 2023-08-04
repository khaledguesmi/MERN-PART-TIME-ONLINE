const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// const { key } = lastTest; destructures the key property from lastTest object and assigns its value 'value' to the variable key.
// const { secondKey } = lastTest; destructures the secondKey property from lastTest object and assigns its value, which is an array [1, 5, 1, 8, 3, 3], to the variable secondKey.
// const [ ,willThisWork] = secondKey; destructures the secondKey array and extracts the element at index 1 (which is 5) and assigns it to the variable willThisWork.
// Finally, the console.log statements print the values of the variables:

// console.log(key); will output 'value'.
// console.log(secondKey); will output [1, 5, 1, 8, 3, 3].
// console.log(secondKey[0]); will output 1 (the first element of the secondKey array).
// console.log(willThisWork); will output 5 (the value extracted from the secondKey array at index 1)
