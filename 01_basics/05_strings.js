const name = "Prachi"
const repoCount = 40

// console.log(name + repoCount + " " + "Value");

console.log(`Hello! my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Prachihcc")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));


// learn how many methods of string this will be beneficial for interview

const newString = gameName.substring(1,4)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);




