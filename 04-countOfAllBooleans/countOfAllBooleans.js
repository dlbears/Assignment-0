const countOfAllBooleans = arr => arr.reduce((p, c) => p + Number(typeof c === 'boolean') , 0) 
// Do not edit this line;
module.exports = countOfAllBooleans;