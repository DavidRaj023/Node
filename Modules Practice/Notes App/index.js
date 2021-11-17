const yargs = require('yargs')
const notes = require('./notesdao.js')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Notes Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Notes Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Notes Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(notes.getNotes(argv.title).body)
    }
})


// Create remove command
yargs.command({
    command: 'delete',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Notes Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title, argv.body)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes!',
    handler: function () {
        notes.listNotes()
    }
})

yargs.parse()