const userEmail = "h@google.com"

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
    
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES
// true, "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const myObjct = {}

if(Object.keys(myObjct).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??)  null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPriced = 100
iceTeaPriced <= 80 ? console.log("less than 80") : console.log("greater than 80");

