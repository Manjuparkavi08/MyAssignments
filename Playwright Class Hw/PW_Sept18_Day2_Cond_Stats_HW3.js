//  Use Both If-Else and Switch Statements
// Funtion 1:
 
function launchBrowser(Browsername) {
    if (Browsername==="Chrome") {
        console.log("Your Supported Browser is Chrome");
    }
    else if (Browsername==="Edge") {
        console.log("Your Supported Browser is Edge");
        
    } else if (Browsername==="Firefox") {
        console.log("Your Supported Browser is Firefox");
        
    }
else {
    console.log("Unsupported Browser");
    
}
    
} launchBrowser("Firefox");


// Function 2:
function runtests() {
    let tests = "SIT";
    switch (tests) {
        case "Smoke":
            console.log("Smoke Test");
            break;
        case "Sanity":
            console.log("Sanity Test");
            break;
         case "Regression":
            console.log("Regression Test");
            break;
        default:
            console.log("By Default, Smoke Test is Performed");
            break;
    }
} runtests()
