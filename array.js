let name = 'Agnes';
let name2 = 'Vicky';
let name3 = 'Ada';
let name4 = 'Rita';
let name5 = 'Rose';

// Creating array using literal notation
let names = ['Agnes', 'Vicky', 'Ada', 'Rita', 'Rose'];

// Using the new keyword to create array
let names2 = new Array ('Agnes', 'Vicky', 'Ada', 'Rita', 'Rose');

console.log(names);
console.log(names2);

let ages = [20, 15, 32, 18, 19];
console.log(ages);

let mixedArrays = [26, 'Cannada', 'USA', 23, 11];
console.log(mixedArrays);


// Adding element to arrays/end of arrays
let countries = ['Kenya'];
countries.push('UK');
console.log(countries);
countries.push('Togo', 'Japan');
console.log(countries);

//adding at the begginning
countries.unshift('Ghana');
console.log(countries);

// Finding the length of an array
let numberOfCountries = countries.length;
console.log(numberOfCountries);

// Accessing elements in an array

['Ghana', 'Kenya', 'UK', 'Japan', 'Togo'];
const firstItem = countries[0];
console.log(firstItem)

const lastItem = countries[countries.length-1];
console.log(lastItem);

countries.push('India');

//

// pop removes the last element
countries.pop();
console.log(countries);

// pop removes the first element
countries.shift();
console.log(countries);

//Access removedelement
const removedElementFirst = countries.pop();
console.log(countries);
console.log('the removedElement is ' + removedElementFirst);

// Adding, Removing and Replacing element at any point of an array
// Using splice() metthod

//splice - from what index in the array do you want to start your operation.
// (deletedcount)- how many array do you want to remove starting from the index?

//(item1....itemN) - elements you want to insert into the array

//splice(start)
//splicestart, deletedcount
//
//

// start example
let currencies = ['NGN', 'USD', 'YEN', 'EURO'];

//adding multiple elements at the begginning
currencies.splice(0, 0, 'GBP', 'CAD', 'CEDIS', 'ZAR');
console.log(currencies);

//adding elements inbetween an array
currencies.splice(2, 0, 'GBP', 'CAD', 'CEDIS', 'ZAR');
console.log(currencies);

// removing elements in an array
currencies.splice(1, 2);
console.log(currencies);

//replace element in array
currencies.splice(1,2, 'GBP', 'CAD', 'CEDIS', 'ZAR');

console.log(currencies);


//Merging Arrays
//Using the Concat() method

let cheapCars = ['Toyota', 'Nissan', 'Corolla'];
let expensiveCars = ['Mercedes', 'Ferari', 'Lmboghini'];
let commonCars = ['Rover', 'Highlander'];

let allCars = cheapCars.concat(expensiveCars, commonCars);
console.log(allCars);




//How do you know if an element is present in an array
//using indexOf() to know if an element is present in an array or not
let FerariIndex = allCars.indexOf('Ferari');
console.log(FerariIndex);

//adding an element if not present

// Using includes() 

let arrayOfCarsObjects = [{car: 'Rover'}, {car: 'Toyota'}]

//Finding if an object exist in an array
//Using find();
let isRoverPresent = arrayOfCarsObjects.find(function (carObject) {
    return carObject.car === 'Rover'
});
console.log(isRoverPresent);