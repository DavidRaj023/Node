const request = require('request')

const weather = (url, callback) => {
    request({url: url, json: true}, (error, response) =>{
        const data = response.body
        if (data.error){
            callback('Error: ' + (data.error).type + ' Code: ' + (data.error).code + ' Info: ' + (data.error).info)
        } else{
            callback('Temperature in: ' + (data.request).query + ' is ' + (data.current).temperature)
        }
    })
}

module.exports = weather