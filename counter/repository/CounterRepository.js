require('dotenv').config();

const axios = require('axios');

class CounterRepository {
    async hit() {
        return await axios.get(`https://api.countapi.xyz/hit/${process.env.COUNTAPI_NAMESPACE}/${process.env.COUNTAPI_KEY}`);
    };
    
    async getCurrentCounter() {
        return await axios.get(`https://api.countapi.xyz/get/${process.env.COUNTAPI_NAMESPACE}/${process.env.COUNTAPI_KEY}`);
    };
}

module.exports = CounterRepository;