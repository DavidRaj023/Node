const weather = require('./utill/weather')

const url = 'http://api.weatherstack.com/current?access_key=ad9cc9ccee682e5f4b011a619badab5a&query=Trichy023'

weather(url, (data) =>{
    console.log(data)
})