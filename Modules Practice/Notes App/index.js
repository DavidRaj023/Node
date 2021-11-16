const yargs = require('yargs')

yargs.command({
    command: 'Add',
    describe: 'Adding a new notes',
    handler: function(){
        console.log("Adding a new command")
    }
})