#!/usr/bin/env node
const fs = require('fs')

//console.log(fs.statSync('./file.js'))

const size = fs.statSync('./file.js').size

console.log(size)