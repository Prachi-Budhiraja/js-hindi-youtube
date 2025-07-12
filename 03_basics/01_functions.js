function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3 , 5)

console.log("Result:" , result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just loggedIn`
}

console.log(loginUserMessage());
