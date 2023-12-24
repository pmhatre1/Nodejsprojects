const getNotes = require('./notes.js')
const chalk = require('chalk')
const validator  = require('validator')
const msg = getNotes()

console.log(msg)
console.log(validator.isEmail('prath@example.com'))
console.log(chalk.green("Success"))