// To Calculate the Factorial of a Number - 

let results = 1;
function Factorial(n : number) {
    if (n > 0)
    {
for (let fact = 1; fact <= n; fact++) {
    results = results*fact;

}

console.log(`The Factorial of the given number is`, results);
    } 
    else if (n === 0 ) {
        console.log(`The Given Number is 0. Hence the Factorial of 0 is 1.`);
        
    }

    else {

    console.log("Error! The Given Number is Negative. Try Again with a Positive Number");
    
    }

    
} Factorial(5) 