const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
  campaignIds: [String],
  name: String,
  userName: String,
  role: String
});

module.exports = mongoose.model('Player', playerSchema);
