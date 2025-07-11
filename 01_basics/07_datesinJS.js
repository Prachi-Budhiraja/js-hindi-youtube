const myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());

console.log(typeof myDate); // object

const myCreatedDate = new Date(2025, 0, 6) // month starts from 0 in this format 
// if we write 2025-01-06 than month start from 01
console.log(myCreatedDate.toDateString());

const myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // to convert milisecond into second as by default value in miliseconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: 'long',
})









