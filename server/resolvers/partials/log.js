const Campaign = require('../../models/campaign');
const Session = require('../../models/session');
const Player = require('../../models/player');
const Character = require('../../models/character');

const logResolvers = {
  Log: {
    player: (parent, args, context, info) => {
      return Player.findOne({_id: parent.playerId});
    },
    character: (parent, args, context, info) => {
      return Character.findOne({_id: parent.characterId});
    },
    session: (parent, args, context, info) => {
      return Session.findOne({_id: parent.sessionId});
    },
    campaign: (parent, args, context, info) => {
      return Campaign.findOne({_id: parent.campaignId});
    }
  }
}

module.exports = { logResolvers };
