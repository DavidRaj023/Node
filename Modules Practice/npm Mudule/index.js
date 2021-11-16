const validator = require('validator')
console.log(validator.isEmail('david@gmail.com'))
console.log(validator.isURL('https://nodejs.org/docs/latest-v15.x/api/packages.html#packages_exports'))


const colour = require('chalk')
console.log(colour.blue('red'))