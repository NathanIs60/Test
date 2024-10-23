const axios = require('axios');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  axios.get('https://www.example.com')
    .then(response => {
      const html = response.data;
      res.render('index', { html });
    })
    .catch(error => {
      console.error(error);
    });
});