const error = e => {throw e};

const pairSum = (nums, target) => nums.length > 1 ? nums.reduce((p, c) => p || nums.reduce((p2, c2) => p2 || c + c2 === target, false), false)
                                                  : error("nums array too small")

// Do not edit this line;
module.exports = pairSum;