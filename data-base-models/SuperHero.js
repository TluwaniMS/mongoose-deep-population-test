const { model, Schema } = require("mongoose");

const SuperHeroSchema = new Schema({
  name: { type: String, required: true },
  superPowers: [{ type: Schema.Types.ObjectId, ref: "SuperPower" }]
});

const SuperHeroModel = model("SuperHero", SuperHeroSchema);

module.exports = { SuperHeroModel };
