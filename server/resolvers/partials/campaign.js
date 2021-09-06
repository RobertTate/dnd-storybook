const Session = require('../../models/session');
const Player = require('../../models/player');
const Character = require('../../models/character');

const campaignResolvers = {
  Campaign: {
    player: (parent, args, context, info) => {
      return Player.findOne(
        {
          $and: [
            { _id: args.id },
            { campaignIds: parent.id }
          ]
        }
      );
    },
    players: (parent, args, context, info) => {
      return Player.find({campaignIds: parent.id});
    },
    character: (parent, args, context, info) => {
      return Character.findOne(
        {
          $and: [
            { _id: args.id },
            { campaignIds: parent.id }
          ]
        }
      );
    },
    characters: (parent, args, context, info) => {
      return Character.find({campaignIds: parent.id});
    },
    session: (parent, args, context, info) => {
      return Session.findOne(
        {
          $and: [
            { _id: args.id },
            { campaignId: parent.id }
          ]
        }
      );
    },
    sessions: (parent, args, context, info) => {
      return Session.find({campaignId: parent.id});
    }
  }
}

module.exports = { campaignResolvers };
