const sumOfNumsWithinARange = (nums, start, end) => {
  const iStart = nums.indexOf(start),
        iEnd = nums.indexOf(end)

  return iStart <= iEnd 
          ? iStart === iEnd 
            ? iEnd === -1
              ? 0 : 1
            : (iEnd + 1) - iStart 
          : nums.length - iStart
}

//nums.reduce((p, c, i, arr) => p + Number(p === 0 ? c === start : c) , 0) 


// Do not edit this line;
module.exports = sumOfNumsWithinARange;