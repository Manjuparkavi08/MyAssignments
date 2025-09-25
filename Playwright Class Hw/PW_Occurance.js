const nums = [2,4,2,1,9,2,1,5,6,2];

function Occurance() {
    let count = 0;
    let arrlen = nums.length;
    console.log("The Length of the Given Array is: ", arrlen);
    for (let index = 0; index < arrlen; index++) {
        let element = nums[index];
    //    console.log(element);
    if (nums[index]===2) {
        count = count+1;
    } }
    console.log("The Value of Number occured is:" +count);
} Occurance() 