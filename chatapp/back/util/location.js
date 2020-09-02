const axios = require('axios');
const HttpError = require('../models/http-error');

const key = 'AIzaSyCe7UKkz2xeEefOlWklc13RHU2H0o0KuF0';

async function getCoordsForAddress(address){

    const response = await 
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${key}`)

    const data = response.data;

    if(!data || data.status==='ZERO_RESULTS'){
        throw new HttpError('Could not find the address', 422);
    }
    console.log(response);
    const coordinates = data.results[0].geometry.location;

    return coordinates;
}

module.exports = getCoordsForAddress;
