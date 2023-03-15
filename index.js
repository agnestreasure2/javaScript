// Arrays
let array = [1,2,3,4,5,6,7];
console.log(array);
/**
 * METHODS
 * .length
 * push
 * pop
 * shift
 * filter
 * map
 */

// array indexing
array.length;
console.log(array[5])

// array push
array.push(8);
console.log(array);

// array pop
array.pop(4);
console.log(array);

//array shift
array.shift(2, 23)
console.log(array);



for(let i = 0; i < array.length; i++){
    console.log(array[1], 'is in position $(i)');


let addNumber = array[i] + 100;
console.log(addNumber, 'added 100');
}