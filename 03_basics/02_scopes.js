// var c = 300
let a = 300

if(true){
let a = 10
const b = 20
console.log("INNER:", a);

}
console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Prachi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

one()

if(true){
    const username = "Prachi"
    if(username === "Prachi"){
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

//  +++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++

console.log(addOne(3)); // this can be possible

function addOne(num1){
    return num1 +1
}

// console.log(addTwo(3)); 
//  // not possible as this is also an expression 

const addTwo = function(num){
    return num +2
}
addTwo(3)