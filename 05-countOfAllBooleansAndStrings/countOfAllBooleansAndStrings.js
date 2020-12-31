const countOfAllBooleansAndStrings = arr => arr.reduce((p, c) => p + Number(typeof c === 'boolean' || typeof c === 'string') , 0) 

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;