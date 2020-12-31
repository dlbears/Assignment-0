const frequencyCounter = word => word.split('').reduce((p, c) => ({...p, [c]: p[c] == null ? 1 : p[c] + 1}) , {})

// Do not edit this line;
module.exports = frequencyCounter;