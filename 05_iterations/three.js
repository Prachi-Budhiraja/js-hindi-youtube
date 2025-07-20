// for of

// [ "", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    if (greet == " ") {
        console.log(" ");
        
        continue;  
    }
    // console.log(` Each char is ${greet}`);
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "United State of America")
map.set("Fr", "France")
map.set("IN", "India") 
// map will store unique values and in order

// console.log(map);


for (const key of map) {
   // console.log(key);
}

for (const [key , value] of map) {
    // console.log(key , "-:", value);   
}

const myObject = {
    'game1' : "NFS",
    'game2' : "Spiderman"
}
// myObject is not iteratable , for of loop does not work here
for(const [key, value] of myObject){
    console.log(key, "-:", "value");
}