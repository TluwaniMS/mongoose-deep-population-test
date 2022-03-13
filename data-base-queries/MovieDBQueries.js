const { MovieModel } = require("../data-base-models/Movie");

const getAllMovies = async () => {
  const movies = await MovieModel.find({}).populate({ path: "leadCharacter", populate: { path: "superPowers" } });

  return movies;
};

const getMovieById = async (movieId) => {
  const movie = await MovieModel.findOne({ _id: movieId }).populate({
    path: "leadCharacter",
    populate: { path: "superPowers" }
  });

  return movie;
};

module.exports = { getAllMovies, getMovieById };
