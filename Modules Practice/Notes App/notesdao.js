const chalk = require('chalk')
const fs = require('fs')

const addNote = function(title, body){
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('Note added')
    } else{
        console.log(david)
        console.log('Notes title already taken')
    }

}

const getNotes = (titlle) => {
    const notes = loadNotes()
    return notes.find((note) => note.title === title)
}

const removeNote = function(title){
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if (duplicateNotes.length === 0){
        console.log('There is no note is available with title: ' + title)
    } else{
        notes.pop(title)
        saveNotes(notes)
        console.log('Note deletes')
    }

}

const listNotes = () => { 
    const notes = loadNotes()
    console.log('Your Notes')
    var num = 1
    notes.forEach((note) => {
        console.log(chalk.yellow('Note '+num+': ')+ chalk.red.bold('Title: ') +note.title + ', ' + chalk.blue('Note: ') +note.body)
        num++
    })

}


const saveNotes = function(note){   
    fs.writeFileSync('notes-details.json', JSON.stringify(note))
}

const loadNotes = function() {
    try{
        const dataBuffer = fs.readFileSync('notes-details.json')    
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error){
        return 'Unable to read the json file'
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    getNotes: getNotes
}