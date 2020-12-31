const range = (s, e) => (new Array(e - s + 1)).fill(s).map((n, i) => n + i)

const fizzBuzz = (start, end) => range(start, end).map(value => {
  const div5 = value % 5 === 0,
        div3 = value % 3 === 0

  return div5 && div3 
          ? 'FizzBuzz' 
            : div5 ? 'Buzz'
              : div3 ? 'Fizz' 
                : value
})

// Do not edit this line;
module.exports = fizzBuzz;