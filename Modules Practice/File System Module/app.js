// Way to import Modules:
//File System Module
const { clear } = require('console')
const fs = require('fs')
//fs.writeFileSync('Note.txt', "Hi david")
fs.appendFileSync('Note.txt', "Hi Raju")

// Way to import own files:
const add = require('./utils.js')

const add2 = add(12, 3)
console.log(add2)

