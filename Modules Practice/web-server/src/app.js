const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Path var definitions
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Set handlebars
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//set static dir
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'David'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'David '
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is some helpful text.',
        name: 'David'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'India'
    })
})

app.get('*', (req, res) => { 
    res.render('404', {
        title: '404',
        name: 'D',
        errorMes: 'Page Not Fount'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})