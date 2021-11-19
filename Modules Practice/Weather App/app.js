const weather = require('./utill/weather')

const place = process.argv[2]

if (place){
    const url = 'http://api.weatherstack.com/current?access_key=ad9cc9ccee682e5f4b011a619badab5a&query='+place
    weather(url, (data) =>{
        console.log(data)
    })    
} else{
    console.log('Please Enter the City Name')
}