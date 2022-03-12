const { SuperHeroModel } = require("../database-models/SuperHero");

const linkSuperPowersToSuperHero = async (args) => {
  await SuperHeroModel.updateOne({ _id: args.superHeroId }, { $push: { superPowers: { $each: args.superPowerIds } } });

  return `Operation completed successfully.`;
};

module.exports = {
  linkSuperPowersToSuperHero
};
