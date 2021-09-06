const { queryResolvers } = require('./partials/query');
const { campaignResolvers } = require('./partials/campaign');
const { sessionResolvers } = require('./partials/session');
const { logResolvers } = require('./partials/log');
const { playerResolvers } = require('./partials/player');
const { characterResolvers } = require('./partials/character');
const { mutationResolvers } = require('./partials/mutation');

const resolvers = {
  ...queryResolvers,
  ...campaignResolvers,
  ...sessionResolvers,
  ...logResolvers,
  ...playerResolvers,
  ...characterResolvers,
  ...mutationResolvers
}

module.exports = resolvers;
