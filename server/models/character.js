const mongoose = require('mongoose');
const { Schema } = mongoose;

const characterSchema = new Schema({
  playerId: String,
  campaignIds: [String],
  name: String,
  race: String,
  class: String,
  alignment: String,
  overview: String,
  pregameBackground: String,
  storyArch: String,
  favoriteWeapon: String,
  favoriteSpell: String,
});

module.exports = mongoose.model('Character', characterSchema);
