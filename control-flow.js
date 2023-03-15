// While loop

let initialNumber = 1;
let limit = 15;
while (initialNumber <= limit) {
    console.log(initialNumber);
    initialNumber++;
}

let sum = 0;
let num = 0;
while (num < 20) {
    sum += num;
    num++
}
console.log(sum);

// Do-While loop
do {
    sum += num;
    num++
} while (num < 20);
console.log(sum);

let number = 10;
let sumOfNumbers = 0;
do {
    sumOfNumbers += number;
    number++
} while (number < 20);
console.log(sumOfNumbers);

//break statement stop execution and continue statement skip and execution and continue
let sumNumbers = 0;
let numbers = 10;
while (numbers < 20) {
    sumNumbers += numbers;
    numbers++;
    if (numbers > 15) {
        continue;
    }

}
console.log(sumNumbers);