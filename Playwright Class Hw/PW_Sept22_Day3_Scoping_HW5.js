const browserName = "Chrome";  //Global Variable
function getBrowserName() { 
    if (browserName==="Chrome") 
        { 
            let browserName = "Chrome v2.0;"  //Block Variable
       // console.log("The Browser selected: Inside function, Inside Block is:" +browserName); 
        } 
    console.log("The Browser selected: Inside  function, Outside Block is:" +browserName); 
    } getBrowserName()
   // console.log("The Browser selected: Outside function, Outside Block is:" +browserName); 

