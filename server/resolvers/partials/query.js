const Campaign = require('../../models/campaign');

const queryResolvers = {
  Query: {
    campaign: (parent, args, context, info) => {
      return Campaign.findById(args.id);
    },
    campaigns: (parent, args, context, info) => {
      return Campaign.find({});
    }
  }
}


module.exports = { queryResolvers };
