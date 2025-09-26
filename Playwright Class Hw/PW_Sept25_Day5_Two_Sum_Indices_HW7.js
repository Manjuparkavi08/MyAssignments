const nums = [2, 4, 7, 8, 11, 14];  
const target = 18; 

function twosums() {
    let results = [];
    for (let index = 0; index <= nums.length; index++) {
       // let element1 = nums[index];
        for (let jdex = index+1; jdex <=nums.length ; jdex++) {
          //  let element2 = jdex;
if (nums[index]+nums[jdex]===target) {
    results = results + nums[index] + nums[jdex]
     console.log(nums[index],nums[jdex]);
}
        }
        
    }
    
}twosums()
