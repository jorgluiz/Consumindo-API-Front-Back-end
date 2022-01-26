const axios = require("axios")

const api = axios.create({
    baseURL: `http://api.weatherstack.com/current?access_key=a55e3292b765143c4b4a16ea5df82308&query=`
})

module.exports = api