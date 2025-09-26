let strvalue= "MADAM";
console.log("The Given String Value is: ", strvalue);
let splitvalue = strvalue.split("");
console.log("Split the Given string into each characters as: ", splitvalue);

//let strIndex = strvalue.indexOf("A");
//console.log("The Index Value of the Charcter is:", strIndex);
//let strInedxChar = strvalue.charAt(0,4);
//console.log("The Char Value of the Index is:", strInedxChar);
//let strlen = strvalue.length;
//console.log("The Length of the given string is:", strlen);

let strRev = "";
for (let index = strvalue.length-1; index >=0; index--  ) {
   // console.log(index); //0 1 2 3 4 (in next lines)
   // console.log(strvalue[index]); M A D A M (in next lines)
    strRev = strRev.concat(strvalue[index]);
}
console.log("The Reverse Of the Given String is:", strRev);

if (strvalue===strRev) {
    console.log("The Given String is a Palindrome");
    
    
} else {
    console.log("The Given String is NOT a Palindrome");
        
}

