const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d20582eacc82652bb4906140224484db/' + latitude + ',' + longitude + ''

    request({ url, json: true }, (error,{ body }) => {
        
        if(error){
            callback('Unable to connect to weather service!',undefined)
        } else if(body.error){
            callback('Unable to find the location!', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out and there is a ${body.currently.precipProbability * 100}% chance of rain`)
        }
            
    })
}

module.exports = forecast