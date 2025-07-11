// arrays 

const myArr = [1,2,3,4,5,6]
const myHeros = [ "shaktimaan", "jagtar"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]);


// javascript array-copy-operation create shallow copies which means changes to be done in original array
// in this properties share the same referenses

// ++++++++ Array methods +++++++++

myArr.push(7)
myArr.push(8)
myArr.pop()  // pop out the last element in array

myArr.unshift(9) // add the element in the starting
myArr.shift()  // remove the element from start

console.log(myArr)

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // this will give -1 as 9 not included

const newArr = myArr.join()  // joins the element of array in string form

console.log(myArr);
console.log(typeof newArr);



// concept of slice and splice
// important for interview pov 
/* slice can't canimulate the original array and does contain hiegher range whereas 
splice manipulate(change) the original array and also contain higher range inclusively  */


console.log("A " , myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B " , myArr);

const myn2 = myArr.splice(1, 3)

console.log(myn2);
console.log("C " ,myArr);







