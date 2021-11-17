const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=ad9cc9ccee682e5f4b011a619badab5a&query=Trichy'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log('Temperature in: ' + (data.request).query + ' is ' + (data.current).temperature)
})