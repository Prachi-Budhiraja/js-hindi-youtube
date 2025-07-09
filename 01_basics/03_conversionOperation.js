let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber )
console.log(valueInNumber)

//"33" => 33
// "33abc" => NaN
// true => 1 or false => 0


let loggedIn = 1
let booleanIsLoggedIn = Boolean(loggedIn)

console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

// 1 => true , 0 => false
// "" => false
// "Prachi" => true


let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)




// ****************************** Operations ******************************************


let value = 3
let negvalue = -value
console.log(negvalue);


console.log(2+2)
console.log(2-2)
console.log(2*2);
console.log(2**2);   // 2 to the power 2



let str1 = "Hello"
let str2 = "Prachi"

let str3 = str1 + " " + str2
console.log(str3);
 
console.log("1" + 2)  // result = 12
console.log(1 + "2"); // result = 12
console.log("1" +2 +2);  // result = 122
console.log(1+ 2+ "2")  //result = 32


console.log(+true)  // result =1
console.log(+"");  // result = 0


let gameCounter = 100
gameCounter++;  // result = 101
++gameCounter // result = 101

// to learn about thid go on mdn pe increment and post increment



