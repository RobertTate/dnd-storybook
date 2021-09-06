const Campaign = require('../../models/campaign');
const Log = require('../../models/log');

const sessionResolvers = {
  Session: {
    campaign: (parent, args, context, info) => {
      return Campaign.findOne({_id: parent.campaignId});
    },
    logs: (parent, args, context, info) => {
      return Log.find({sessionId: parent.id});
    }
  }
}

module.exports = { sessionResolvers };
