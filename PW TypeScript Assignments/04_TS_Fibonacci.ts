function fibonacci(n : number) {
    let result = 0;
    let fib1 = 0;
    let fib2 = 1;
    if (n > 0) {
            for(let i=0; i<n; i++) {
               result =  result + fib1 ;
              console.log(result);    
                 fib1 = fib2; 
                 fib2 = result;           
        }   
    }
} fibonacci(5)


 