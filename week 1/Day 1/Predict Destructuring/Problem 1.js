const cars = ['Tesla', 'Mercedes', 'Honda'] 
//This line declares a constant cars and initializes it with an array containing three elements: 'Tesla', 'Mercedes', and 'Honda'.
const [ randomCar ] = cars 
// This line declares a constant randomCar and uses destructuring to extract the first element of the cars array, which is 'Tesla', and assign it to randomCar.
const [ ,otherRandomCar ] = cars
// This line declares a constant otherRandomCar and uses destructuring to extract the second element of the cars array, which is 'Mercedes', and assign it to otherRandomCar.




//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
// this code is right
