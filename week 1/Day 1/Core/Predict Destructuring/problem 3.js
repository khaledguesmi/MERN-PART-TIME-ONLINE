const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
// The first console.log(password) statement simply prints the value of the password variable, which is '12345'.
// The second console.log(hashedPassword) statement prints the value of the hashedPassword variable, which was extracted using object destructuring from the person object.
//  Since there is no password property in the person object, hashedPassword is undefined.
