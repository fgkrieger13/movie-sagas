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

  router.put('/', (req, res) => {
    const updatedMovie = req.body
    console.log(updatedMovie)

    const queryText = `UPDATE "movies" SET "title" = $1, "description" = $2
    WHERE 
    "id" = $3`;
  
    const queryValues = [
        updatedMovie.newTitle,
        updatedMovie.newDescription,
        updatedMovie.id
    ]
    pool.query(queryText, queryValues)
      .then((response) => {
        console.log('movies category PUT response', response);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log('favorites category PUT error', error);
        res.sendStatus(500);
      })
  });



  module.exports = router;