class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    if (nums.length > 2) {
    const iCenter = Math.floor(nums.length / 2)
    const center = nums[iCenter],
          left = nums.slice(0, iCenter),
          right = nums.slice(iCenter + 1)

    return center === target || this.binarySearch(left, target) || this.binarySearch(right, target)
    } else {
      return nums.reduce((p, c) => p || c === target, false)
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;