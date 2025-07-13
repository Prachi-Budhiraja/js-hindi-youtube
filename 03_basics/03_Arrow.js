const user = {
    username: "Prachi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

// console.log(this);    // output is {} as there is no current operation

// function chai(){
//     let username = "Prachi"
//     console.log(this); //  this willl give so many things in result
//     console.log(this.user);  // this also give so  many values
//   // this keyword does not perform its property in functions  
// }

// chai()


// const chai = function(){\
//     let username = "Prachi"
//     console.log(this.username);  // result is undefined
//     // this will also does not work
// }


const chai = () => {
    let username = "Prachi"
    console.log(this); // result is {}
    
}

chai()


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => (num1 + num2)  // implicit function

const addTwo = (num1 , num2) => ({username: "Prachi"}) // in case of username declare like this
console.log(addTwo(4 , 5));
