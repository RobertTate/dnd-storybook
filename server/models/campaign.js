const mongoose = require('mongoose');
const { Schema } = mongoose;

const campaignSchema = new Schema({
  name: String,
  overview: String
});

module.exports = mongoose.model('Campaign', campaignSchema);
