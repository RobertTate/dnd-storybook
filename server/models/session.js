const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  campaignId: String,
  sessionNumber: String,
  sessionTitle: String,
  dmOverview: String,
});

module.exports = mongoose.model('Session', sessionSchema);
