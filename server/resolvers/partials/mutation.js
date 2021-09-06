const Campaign = require('../../models/campaign');
const Player = require('../../models/player');

const mutationResolvers = {
  Mutation: {
    createCampaign: (parent, args) => {
      let campaign = new Campaign({
        name: args.name
      });
      return campaign.save();
    },
    updateCampaignOverview: async (parent, args) => {
      let campaignToUpdate = await Campaign.findOne({_id: args.id});
      campaignToUpdate.overview = args.overview;
      return campaignToUpdate.save();
    },
    createPlayer: (parent, args) => {
      let newPlayer = new Player({
        campaignIds: args.campaignIds || [],
        name: args.name,
        userName: args.userName,
        role: args.role
      });
      return newPlayer.save();
    },
    addPlayerToCampaign: async (parent, args) => {
      let updatePlayer = await Player.findOne({_id: args.playerId});
      updatePlayer.campaignIds.push(args.campaignId);
      return updatePlayer.save();
    }
  }
}

module.exports = { mutationResolvers };
