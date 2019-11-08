const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();



router.get('/', (req, res) => {

    // SQL Query to return all favorites
    const query = 'SELECT * FROM movies;';
  
    pool.query(query)
      .then((response) => {
        console.log('SELECT ALL movies response', response);
        res.send(response.rows)
      })
      .catch((error) => {
        console.log('SELECT ALL movies error', error);
        res.sendStatus(500);
      })
  });



  module.exports = router;