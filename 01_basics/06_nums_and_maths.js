const score = 300
console.log(score);

const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 123.876 // if number is 23 thwn ans is 23.9

console.log(otherNumber.toPrecision(3));

const hundereds = 1000000
console.log(hundereds.toLocaleString('en-IN'));


//*************************** Maths *******************************
 
console.log(Math);
console.log(Math.abs(-4)); // absolute convert negative value into positive
console.log(Math.round(4.8));  // roundoff the value
console.log(Math.ceil(4.8)); // provide higher value
console.log(Math.floor(4.8)); // provide base value
console.log(Math.min(4,5,2,8));  // provide minimum value
console.log(Math.max(3,6,7,8,9));  // provide max value

console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max -min +1)) + min);












