const mongoose = require('mongoose');
const { Schema } = mongoose;

const logSchema = new Schema({
  sessionId: String,
  campaignId: String,
  playerId: String,
  characterId: String,
  body: String,
});

module.exports = mongoose.model('Log', logSchema);
