//  Task 1 - Function Declaration
function userProfile(name) {
    console.log("1. This is an Example of Named Function:");
    console.log("Hello ".concat(name,"!", '\n'));
    
} userProfile("Test Leaf")

//  Task 2 - Arrow Function
let double = (x) => { // fat arrow
    console.log("2. This is an Example of Arrow Function:");
console.log("The doubled value is: ", x*x, '\n');
}
double(5)
    
 // Task 3 - Anonymous Function
let TimeOut = function() {
setTimeout ( () => {
    console.log("3. This is an Example of Anonymous Function:");
    console.log("This Message is Delayed by 2 seconds", '\n'); 
}, 1000); 
}; TimeOut()

// Task 4 - Call Back Function
function getUserData(callBackFunction) {
    setTimeout(function () {
       console.log("4. This is an Example of Callback Function:");
       callBackFunction ()
      }  ,3000);
     }
    
    function callBackFunction () {
        console.log("This Message is Printed after 3 seconds");
        
    }
 getUserData( callBackFunction)
