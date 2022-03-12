const { MovieModel } = require("../database-models/Movie");
const { Movies } = require("../sample-data/MoviesData");

const createSampleMoviesScript = async () => {
  await MovieModel.insertMany(Movies);

  console.log(`Sample movies have been created successfully.`);
};

module.exports = { createSampleMoviesScript };