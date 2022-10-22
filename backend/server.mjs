import * as dotenv from 'dotenv'
dotenv.config()
import express from "express"
import cors from "cors"
import qs from "qs"
import fetch from 'node-fetch';
const server = express()
const port = 3000

server.use(cors());


const apiUrl =  "https://api.openweathermap.org/data/2.5/weather";
const apiKey = process.env.API_KEY;

server.get('/', async (req, res) => {
    let query = req.query
    query.appid = apiKey
    let queryString = qs.stringify(query)

    // Fetch on OpenWeather Api
    let response = await fetch(`${apiUrl}?${queryString}`);
    let json = await response.json();
    res.send(json)

})

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})