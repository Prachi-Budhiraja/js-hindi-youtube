// Imediately Invoke Function Expressions (IIFE)

// Role of IIFE is to make function invoke imediatetly and to prevent function from global variable pollution

(function chai(){
    // name IIFE
    console.log("DB CONNECTED");
})();

// if we want to use more than one IIFE , we should close first one with semi colon without that progran will not run

( () => {
    console.log("DB IS CONNECTED");
} )();

( (name) => {
    console.log("DB IS CONNECTED to `{name");
} )("Prachi");