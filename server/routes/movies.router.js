const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();



router.get('/', (req, res) => {

    // SQL Query to return all favorites
    const query = `SELECT * FROM "junction"
    JOIN "movies" ON "junction"."movie_id" = "movies"."id"
    JOIN "genres" ON "junction"."genre_id" = "genres"."id";`
  
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