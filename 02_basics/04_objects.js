// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularuser = {
    email: "some@google.com",
    fullname: {
        userFullname: {
            firstname: "Prachi",
            lastname: "Budhiraja", 
        }
    }
}

console.log(regularuser.fullname.userFullname.firstname);

const obj1 = {1:"a" , 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5 : "a" , 6: "b"}
// const obj3 = {obj1 , obj2}

const obj3 = Object.assign({} , obj1 , obj2, obj4) // good format to write {}

const obj5 = {...obj1 , ...obj2}  // both works same
console.log(obj3);
console.log(obj5);


const users = [
    {
        id: 1,
        email:"h@google.com" ,
    },
    {
        id: 2,
        email: "t@google.com"

    },
    {

    },
    {

    },
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));






