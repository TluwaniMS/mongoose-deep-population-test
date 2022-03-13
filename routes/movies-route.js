const express = require("express");
const router = express.Router();
const { getAllMovies, getMovieById } = require("../data-base-queries/MovieDBQueries");

router.get("/get-deeply-populated-movies", async (req, res) => {
  const movies = await getAllMovies();

  res.status(200).send({ data: movies });
});

router.get("/get-deeply-populated-movie/:movieId", async (req, res) => {
  const { movieId } = req.params;
  const movie = await getMovieById(movieId);

  res.status(200).send({ data: movie });
});

module.exports = router;
