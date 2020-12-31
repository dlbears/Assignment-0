const setUnionOfAnyAmountOfSets = (...args) => args.reduce((p, c) => {
  c.forEach(el => p.add(el))
  return p
})

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;