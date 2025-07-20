const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
}

for (const key in myObject) {
       // console.log(` ${key} shortcut is for ${myObject[key]}`);
    }


const programming = ["JS", "cpp", "ruby", "swift"]

for(key in programming){
    // console.log(programming[key]);
    
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "United State of America")
map.set("Fr", "France")
map.set("IN", "India") 
// for in loop doesn't work in maps bcz it is not iterable

for(const key in map){
    console.log(key);
}