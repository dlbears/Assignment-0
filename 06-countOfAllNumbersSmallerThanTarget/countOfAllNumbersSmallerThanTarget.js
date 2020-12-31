const countOfAllNumbersSmallerThanTarget = (nums, target) => nums.reduce((p, c) => p + Number(c < target) , 0) 


// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;