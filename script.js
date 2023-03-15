// Dom is an object based model(an API), it is not a programming language 
/**
 * it can be used to select an element
 * interact with element to carry out event
 */

// How to access element in the dom
// Using ID's
let bodyElement = document.getElementById('container');
// console.log(bodyElement);

let everyBody = document.getElementById('hello');
// console.log(everyBody);


// accessing using query selector

let container = document.querySelector('#container');

// console.log(container);

// access element by classname
let classAgnes = document.getElementsByClassName('everyone');


// access element by tag name

// DOM manipulation

let helloElements = 
document.getElementsByTagName('div')[2];
console.log(helloElements);
helloElements.innerHTML = <p> 'Good morning stutern learners'</p>;

// Apply style
helloElements.style.color = 'blue';
helloElements.style.background = 'red';
