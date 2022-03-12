const { model, Schema } = require("mongoose");

const MovieSchema = new Schema({
  title: { type: String, required: true },
  leadCharacter: { type: Schema.Types.ObjectId, ref: "SuperHero" },
  about: { type: String, required: true }
});

const MovieModel = model("Movie", MovieSchema);

module.exports = { MovieModel };
