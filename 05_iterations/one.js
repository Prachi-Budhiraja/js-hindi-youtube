// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is the best number");
    }
    // console.log(element);
}


for (let i = 0;i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);

    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log('i' + '*' + 'j' + '=' + i * j );
        
    }
}

myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}

// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(" 5 Detected");
        break
    }
    console.log(`value of i is ${i}`);
    
}


for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("5 Detected");
        continue    // continue will skip condition for once 
    }
    console.log(`Value of i is ${i}`);
    
    
}