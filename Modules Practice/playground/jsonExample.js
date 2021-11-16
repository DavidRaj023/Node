const fs = require('fs')
const book = {
    name: 'Rich dady Poor daddy',
    planet: 'David',
    age: '23'
}

fs.writeFileSync('book.json', JSON.stringify(book))
const jsonString = fs.readFileSync('book.json').toString()
console.log(JSON.parse(jsonString).name)