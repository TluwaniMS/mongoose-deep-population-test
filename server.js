const { app } = require("./app");
const { connectToDataBase } = require("./database-configuration");
const { getAllMovies } = require("./data-base-queries/MovieDBQueries");
const { createSampleMoviesScript } = require("./migration-scripts/MovieMigrationScript");
const { createSampleSuperHeroesScript } = require("./migration-scripts/SuperHeroMigrationScript");
const { createSampleSuperPowersScript } = require("./migration-scripts/SuperPowerMigrationScript");

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});

const populateDBWithSampleData = async () => {
  await createSampleMoviesScript();
  await createSampleSuperHeroesScript();
  await createSampleSuperPowersScript();

  console.log(`database populated successfuly.`);
};

(async () => {
  await connectToDataBase();
  const movies = await getAllMovies();

  movies.length === 0 ? await populateDBWithSampleData() : console.log(`database hase been populated successfuly`);
})();
