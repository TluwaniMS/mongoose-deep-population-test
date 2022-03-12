const { SuperPowerModel } = require("../database-models/SuperPower");
const { SuperPowers } = require("../sample-data/SuperPowersData");

const createSampleSuperPowersScript = async () => {
  await SuperPowerModel.insertMany(SuperPowers);

  console.log(`Sample super powers have been created successfully.`);
};

module.exports = { createSampleSuperPowersScript };
