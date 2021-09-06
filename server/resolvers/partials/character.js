const Player = require('../../models/player');
const Log = require('../../models/log');

const characterResolvers = {
  Character: {
    logs: (parent, args, context, info) => {
      return Log.find({characterId: parent.id});
    },
    player: (parent, args, context, info) => {
      return Player.findOne({_id: parent.playerId});
    }
  }
}

module.exports = { characterResolvers };
