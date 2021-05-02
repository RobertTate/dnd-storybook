const { gql } = require('apollo-server-express');

const typeDefinitions = gql`
  type Query {
    campaign(id: ID!): Campaign
    campaigns: [Campaign]
  }

  type Campaign {
    id: ID!
    name: String!
    overview: String!
    player(id: ID!): Player!
    players: [Player]!
    character(id: ID!): Character
    characters: [Character]
    session(id: ID!): Session
    sessions: [Session]
  }

  type Session {
    id: ID!
    sessionNumber: Int!
    campaign: Campaign!
    sessionTitle: String!
    dmOverview: String!
    logs: [Log]
  }

  type Log {
    id: ID!
    body: String!
    player: Player!
    character: Character
    session: Session!
    campaign: Campaign!
  }
  
  enum Role {
    DUNGEON_MASTER
    ADVENTURER
  }

  type Player {
    id: ID!
    logs: [Log]
    name: String!
    userName: String!
    role: Role!
    characters: [Character]
  }

  type Character {
    id: ID!
    player: Player!
    logs: [Log]
    name: String!
    race: String!
    class: String!
    alignment: String!
    overview: String
    pregameBackground: String
    storyArch: String
    favoriteWeapon: String
    favoriteSpell: String
  }
`

module.exports = typeDefinitions;
