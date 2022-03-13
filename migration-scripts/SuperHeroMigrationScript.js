const { SuperHeroModel } = require("../data-base-models/SuperHero");
const { SuperHeroes } = require("../sample-data/SuperHeroesData");

const createSampleSuperHeroesScript = async () => {
  await SuperHeroModel.insertMany(SuperHeroes);

  console.log(`Sample heroes have been created successfully.`);
};

module.exports = { createSampleSuperHeroesScript };
