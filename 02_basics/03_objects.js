// singleton
// Object.create

//Object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Prachi",
    "full name" : "Prachi Budhiraja",
    [mySym]: "mykey1",
    age: 21,
    location: "Rohtak",
    email: "prachi@google.com",
    isLoggedIn: "false",
    lastLoginDays: ["monday", "saturday"],
}

console.log(jsUser.email);
console.log(jsUser["email"]);

console.log(jsUser["full name"]);
console.log(jsUser[mySym]);



