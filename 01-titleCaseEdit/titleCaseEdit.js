const titleCaseEdit = title => title.split(' ')
                                    .map(([first, ...rest]) => ([first.toUpperCase(), ...rest]).join(''))
                                    .join(' ')

// Do not edit this line;
module.exports = titleCaseEdit;