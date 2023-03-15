
// How to access element in the dom
// Using ID's
let bodyElement = document.getElementById('container');
console.log(bodyElement);

let everyoneElement = document.getElementById('everyone');
// console.log(everyoneElement);


// accessing using query selector

let container = document.querySelector('#container');

// console.log(container);

// access element by classname
let classEveryOne = document.getElementsByClassName('everyone');
console.log(classEveryOne);


// access element by tag name

// DOM manipulation

let helloElements = 
document.getElementsByTagName('div')[2];
console.log(helloElements);
helloElements.innerHTML = <p>'What is your name'</p>;

// Apply style
helloElements.style.color = 'blue';
helloElements.style.background = 'red';


// Create element
let paragraphEement = document.createElement("p");
paragraphEement.innerText = "We are celebrating international womens day today";

// Appending or adding an element into an Html document
let body = document.getElementById("element-creation");


body.appendChild(paragraphEement);

// Removing an element
//1. get the element you want to remove
let questionElem = document.querySelector("#question");
//2. get the parent element (see body above)
body.removeChild(questionElem);


// Changing multipe elements
// let holidays = document.querySelectorAll("li");
// let holidays = document.querySelectorAll(".holiday");

// for (let i =   0; i < holidays.length; i++) {
//     holidays[i].style.color = "red";
//     holidays[1].style.backgroundColor = "blue";
// }


// Events are sent to notify code of interesting things that have taken place
// Ading an event listener / event handler
// let wishButton = document.getElementById("wish-button");

// method 2
// wishButton.onclick = function() {
//     alert("Happy International Women/'s Day");
// }

// method 3 and most preferred 
// wishButton.addEventListener("click", function() {
//     alert(" Wishing you a Happy International Women/'s Day");
// });

// // remove event listener
// let removeEventButton = document.getElementById("remove-event-button");

// removeEventButton.addEventListener("click", function() {
//     wishButton.removeEventListener("click", alertMessage);
//     alert("Removed event")
// });

// Accessing the value of what has been clicked on

// for (let i = 0; i < holidays.length; i++) {
//     holidays[i].addEventListener("click", function(event) {
//         alert("Holiday clicked on is " + event.target.innerText)
//     });
// }

// problem statement

// local storage allows you store info in brouwser and allows you to access the info
//mozilla developer doc
// event bubbling and capturing



// 

