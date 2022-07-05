const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// this will output Tesla, then Mercedes. The first and second elements of the array.

// #2******
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);
// console.log(otherName);

// will throw an error for name because it is not defined. The variable name is actually otherName, to solve this error, remove line 18 (not sure why commenting this out doesnt work?)

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
// console.log(password);
// console.log(hashedPassword);

// 12345 will print 
// hashed password will throw an error because password does not exist in the person object.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
// console.log(first == second);
// console.log(first == third);

// grabbing the number at first index, then at third index, then at 8 index
// will print false, then true


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

// will print the word "value" then will print the array called secondKey, then will print the first value in that array, then will print the element at index 1 of the array.