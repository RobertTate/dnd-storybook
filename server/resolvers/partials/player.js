const Campaign = require('../../models/campaign');
const Character = require('../../models/character');
const Log = require('../../models/log');

const playerResolvers = {
  Player: {
    logs: (parent, args, context, info) => {
      return Log.find({playerId: parent.id});
    },
    characters: (parent, args, context, info) => {
      return Character.find({playerId: parent.id});
    },
    campaigns: (parent, args, context, info) => {
      return Campaign.find({_id: parent.campaignIds});
    }
  }
}

module.exports = { playerResolvers };
