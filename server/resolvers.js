const { CAMPAIGNS, PLAYERS, CHARACTERS, SESSIONS, LOGS } = require('./data');

const resolvers = {
  Query: {
    campaign: (parent, args, context, info) => {
      return CAMPAIGNS.find((campaign) => {
        return args.id === campaign.id;
      });
    },
    campaigns: (parent, args, context, info) => {
      return CAMPAIGNS;
    }
  },
  Campaign: {
    player: (parent, args, context, info) => {
      return PLAYERS.find((player) => {
        return args.id === player.id;
      });
    },
    players: (parent, args, context, info) => {
      return PLAYERS.filter((player) => {
        return player.campaignIds.includes(parent.id);
      });
    },
    character: (parent, args, context, info) => {
      return CHARACTERS.find((character) => {
        return args.id === character.id;
      });
    },
    characters: (parent, args, context, info) => {
      return CHARACTERS.filter((character) => {
        return character.campaignIds.includes(parent.id);
      });
    },
    session: (parent, args, context, info) => {
      return SESSIONS.find((session) => {
        return args.id === session.id;
      });
    },
    sessions: (parent, args, context, info) => {
      return SESSIONS.filter((session) => {
        return session.campaignId === parent.id;
      });
    }
  },
  Session: {
    campaign: (parent, args, context, info) => {
      return CAMPAIGNS.find((campaign) => {
        return parent.campaignId === campaign.id;
      });
    },
    logs: (parent, args, context, info) => {
      return LOGS.filter((log) => {
        return log.sessionId === parent.id;
      });
    }
  },
  Log: {
    player: (parent, args, context, info) => {
      return PLAYERS.find((player) => {
        return parent.playerId === player.id;
      });
    },
    character: (parent, args, context, info) => {
      return CHARACTERS.find((character) => {
        return parent.characterId === character.id;
      });
    },
    session: (parent, args, context, info) => {
      return SESSIONS.find((session) => {
        return parent.sessionId === session.id;
      });
    },
    campaign: (parent, args, context, info) => {
      return CAMPAIGNS.find((campaign) => {
        return parent.campaignId === campaign.id;
      });
    }
  },
  Player: {
    logs: (parent, args, context, info) => {
      return LOGS.filter((log) => {
        return parent.id === log.playerId;
      })
    },
    characters: (parent, args, context, info) => {
      return CHARACTERS.filter((character) => {
        return parent.id === character.playerId;
      });
    }
  },
  Character: {
    logs: (parent, args, context, info) => {
      return LOGS.filter((log) => {
        return parent.id === log.characterId;
      });
    },
    player: (parent, args, context, info) => {
      return PLAYERS.find((player) => {
        return parent.playerId === player.id;
      });
    }
  }
}

module.exports = resolvers;
