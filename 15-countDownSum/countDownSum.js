class MySolution {
  countDownSum(num) {
    return num > 1 ? num + this.countDownSum(num - 1) : 1
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;