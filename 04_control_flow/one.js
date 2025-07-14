//if

let isLoggedIn = true
let temprature = 41
if(isLoggedIn){
    console.log("executed");
}

if (temprature < 50) {
    console.log("Temprature is less than 50");
    
}
else{
    console.log("Temprature is greater than 50");
}


const score = 200
if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);
}

// nested if else

const balance = 1000

if(balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log(" less than 750");
}else if(balance< 1000){
    console.log("less than 1000");
} else{
    console.log("greater than 1000");
    
}


// logical operator

const isLoggedInn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromMail = true

if(isLoggedInn && debitcard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromMail){
    console.log("User logged in");
    
}


