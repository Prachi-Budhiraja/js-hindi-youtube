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


function calculateCartPrice(...num1){     //here it is rest operator instead of spread
    return num1
}

console.log(calculateCartPrice(100, 300, 400));

const user = {
    username: "Prachi",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)

handleObject({
    username: "Sam",
    price: 399   
})

const myNewArray = [100, 200, 300]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 500, 400, 700]));
