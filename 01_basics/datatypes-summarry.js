// there are two type of data types primitive and non primitive

// Primitive datatypes******

// 7 types: String, Number, Boolean, Null, Undefined, Symbol (unique value) , BigInt

// there are call by value

const score = 100
const scoreValue = 100.4

const isLogggedin = true
const outtemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

// const bigNumber = 462411863758329612547n



//REFERENCE(Non Primitive)*******

// Array, Object, Function

const heros = ["shaktiman", "naagraj" , "doga"];

let myObj = {
    name: "Prachi", 
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction); // function but if we study in detail then this is function object
console.log(typeof outtemp);  // object
console.log(typeof heros); // object


// Javascript id a dynamically typed language




// *********************************************************************************

// two types of memory
// Stack(Primitive)(call by value) , Heap(Non primitive)(by reference)

let myFullName = "Prachi Budhiraja"

let anotherName = myFullName
anotherName = "Prachi"

console.log(myFullName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "use@sbi",
}

let userTwo = userOne

userTwo.email = "prachi@google.com"

console.log(userOne.email);
console.log(userTwo.email);


