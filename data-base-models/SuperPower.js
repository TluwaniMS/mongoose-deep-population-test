const { model, Schema } = require("mongoose");

const SuperPowerSchema = new Schema({
  power: { type: String, required: true },
  description: { type: String, required: true }
});

const SuperPowerModel = model("SuperPower", SuperPowerSchema);

module.exports = { SuperPowerModel };
