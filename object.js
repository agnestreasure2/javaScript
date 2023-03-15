//OBJECT

/**
 * properties of a car- brand, color, number of tires, num of doors, isAutomatic
 * 
 * functionalities of a car- move forward, reverse, accelerate, play music, stop, start
 */

// How to create an object

//Literal notation

let car = {
    brand: 'benz',
    color: 'white',
    numberOfTyres: 4,
    numOfDoors: 4,
    isAutomatic: 'Yes',
    currentDistance: 0,
    displayNumberOfTyres: function() {
        return this.numberOfTyres;
    },
    moveForward: function() {
        this.currentDistance++;
        return this.currentDistance;
    }


}
console.log(car);

//Constructor notation
let car2 = new Object();
car2.brand = 'corola';
car2.color = 'blue';
car2.numberOfTyres = 4;
car2.numOfDoors = 3;
car2.isAutomatic = 'No';
car2.displayNumberOfTyres = function() {
    return this.numberOfTyres;
}
console.log(car2);

//Accessing object property
/**
 * Dot Notation
 * Bracket Notation
 */

//Dot Notation
console.log('Color of car is ' + car.color);
console.log('Color of car2 is ' + car2.color);

//Bracket Notation
console.log('Brand of car is ' + car['brand']);
console.log('Brand of car2 is ' + car2['brand']);

const person = {
    name: 'Agnes',
    gender:'female',
    track: 'mobile app dev',
    nationality: 'nigerian',
    school: 'futminna',
    age: 20,
}
console.log(person);

//Accessing object method
//syntax = objectName.method();

console.log('The number os tyres in car are ' + car.displayNumberOfTyres());
console.log('The number of tyres in car are ' + car.numberOfTyres);

console.log(car.moveForward());

//Declaring a blueprint for creating new object

function Toyota(model, year, numberOfTyres, isAutomatic, currentDistance) {
    this.numberOfTyres = numberOfTyres,
    this.brand = 'Toyota';
    this.model = model;
    this.year = year;
    this.isAutomatic = isAutomatic;
    this.currentDistance = currentDistance;
    this.accelerate = function() {
        this.currentDistance += 5;
        
    },
    this.displayCurrentDistance = function() {
        return this.currentDistance;
    }
}

let camry = new Toyota('camry', 2021, 5, 'true', 0);
console.log(camry);

let camry2008 = new Toyota('camry', 2008, 4, 'false', 300);
console.log(camry2008);

camry.accelerate();
camry2008.accelerate();

console.log('After acceleration');
console.log(camry.displayCurrentDistance());
console.log(camry2008.displayCurrentDistance());

let address = {
    street: 'ikorodu',
    city: 'lagos',
    zipCode: 123245,
}
console.log(address);

let newAddress = new Object() ;
newAddress.street = 'yaba';
newAddress.city = 'lagos';
newAddress.zipCode = 34556;

console.log(newAddress);

//using the factory method to create a factory function
function houseAddrees  (street, city, zipCode) {
    return {
        street: street,
        city: city,
        zipCode: zipCode,
    }
}

//Nested Objects
const student = {
    firstName: 'Agnes',
    lastName: 'Agbo',
    age: 20,
    jambScores: {
        ENG: 99,
        MATH: 80,
        PHY: 100, 
        CHEM: 80,
    }
}

console.log(student);

//to access a property in a nested object
let phyScore = student.jambScores.PHY;
console.log('phyScore is ' + phyScore);

let mathScore = student['jambScores']['MATH'];
console.log('mathScore is ' + mathScore);

// modifying the created object
student.course = 'computer science';
console.log(student);

student.jambScores.BIO = 75;
console.log(student);

// value vs reference types
// primitive datatypes - string, number, boolean, undefined, null are passed by values
// non-primitive datatypes - arrys, object, function are passed by reference

// const a = 16;
// const b = 'Nigeria';

// let c = a;
// let d = b;

// console.log(c);
// console.log(d);

//  a = 30;
//  b = 'USA';

//  console.log(a, b, c, d);

 const person2 = {
    name: 'Monica',
    age: 22,
    gender: 'female'
 }

console.log(person2);

person2.height = '5ft';
console.log(person2);

function person3  (name, age, gender) {
    return{
        name: name,
        age: age,
        gender: gender,
    }
}

const person4 = person3('Agnes', 20, 'female');
const person5 = person3 ('Agbo', 25, 'male');

//How to copy/clone an object

//option 1 - using object.assigned()

const firstBook = {
    author: 'Evans Brother',
    title: 'Simbi goes to school',
    yearPublisged: 1999,
}
//wrong way to copy/clone an oject
const secondsBook = firstBook;
console.log(secondsBook);

book1.title = 'Purple Hibiscus';

console.log(book1);

//right way to copy/clone


