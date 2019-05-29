const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1f20f65e15b01258eaf924d20d5b28b3/' + latitude + ',' + longitude + '?lang=es&units=si'
    request( {url, json: true}, (error, response) => {
        const {error:locationError, daily, currently} = response.body
        if (error) {
            callback('Unable to connect to weather server.', undefined)
        } else if (locationError) {
            callback('The given location is invalid', undefined)
        } else {
            callback(undefined, `${daily.data[0].summary} La temperatura es ${currently.temperature}°C. Hay ${currently.precipProbability}% de probabilidad de lluvia.`)
        }
    })
}

module.exports = forecast