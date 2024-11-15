require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));

router.post('/weather', (req, res) => {
  
  const zipCode = req.body.ZipCode
  const apiKey = process.env.API_KEY
  const URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`

  axios
    .get(URL)
    .then((response) => {
      const weatherData = response.data
    res.render('weather/show.ejs', {data: weatherData})
      
    })
    .catch((err) => {
      console.error('Error fetching weather data:', err)
      res.status(500).send('Error retrieving weather data.')
    })
})

router.get('/', (req, res) => {
  res.render('../views/index.ejs')
})

module.exports = router
