// Call Back Function
const Browser = "Chrome";
function checkBrowserVersion (callBackFunction) {
setTimeout (() => {
     callBackFunction (2.5)
},2000);
   
}

function callBackFunction (x) {
    console.log("The Browser and Version Launched is, ", Browser .concat(x));
    
} 
checkBrowserVersion(callBackFunction)