const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWF1cmljZWFjIiwiYSI6ImNqdmNyeWF2MjIwdGs0YW1lejRhbDJrbGgifQ.vzhDiNVCsZ7LKfPWt8jkUQ'

    request({ url, json: true}, (error, response) => {
        // const {center:coordinate, place_name:location} = response.body.features[0]
        if (error) {
            callback('Unable to connect to location services.', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                // latitude: coordinate[1],
                // longitude: coordinate[0],
                // location
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
           
    })
}

module.exports = geocode