const getNotes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')

const command = process.argv[2]

console.log(process.argv)
console.log(yargs.argv)

// Go into the notes app
// Get the required module and write the data in the file using the commands below.
const fs = require('fs')
fs.writeFileSync('notes.txt','This file was created by Node.js!')
fs.appendFileSync('notes.txt','This is to append to a file.')

// Used the add function from the utils file to add and send the output.
const add = require('./utils.js')
const sum = add(4,-2)
console.log(sum)

//Before using the npm module, we have to initialize the npm
// Command for initialising the npm: Use npm -v to get the version.
// npm init : This command initialise the npm in our project and create the dependency file.
// npm init writes the package.json file to the notes directory.

// Go to https://www.npmjs.com/package/validator
// Install the validator:  npm i validator@13.11.0

const validator = require('validator')
// Using the isEmail from the validator module to check if the email is valid. Returns a boolean.
console.log(validator.isEmail('example.com'))