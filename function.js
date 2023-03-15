// Illustrated function using a bottle capper machine
//functions that caps bottles


// defining a function is a way of declaring a function
function bottleCapper (bottle, cap) {
    return bottle + cap;
    // you can also output using the let keyword
}

// call/run/execute/invoke
let cocacolaBottle = bottleCapper('transparent bottle', ' red cap');
console.log(cocacolaBottle);

// Function expression
const bottleCapper2 = function(bottle, cap) {
    let result = bottle + ' and '  + cap;
    return result;
}

let spriteBottle = bottleCapper2('transparent bottle', ' green cap');
console.log(spriteBottle);

// function expression using arrow method/arrow function expression
const bottleCapper3 = (bottle, cap) => bottle + ' and ' + cap;
const fantaBottle = bottleCapper3('transparent bottle', 'orange cap');
console.log(fantaBottle);

