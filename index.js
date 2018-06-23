#!/usr/bin/env node
const fs = require('fs')
const argv = require('yargs').argv
 //nombre lo que escriban y los argumentos
    /*.usage('$0 <cmd> [args]')
    .command('add <name>', yargs => {
        yargs.positional('name', {
            type: 'string',
            describe: 'Add a contact',
        })
    })
    .help()
    .argv*/

const n = argv.num
const text = argv.text

console.log(argv)

if (!fs.existsSync('./folder')){
    fs.mkdirSync('./folder')
    for(let i = 0; i < n; i++){
        fs.writeFileSync(`./folder/mile${i}.js`, text, 'utf8')
    }

}
console.log(fs.mkdirSync)