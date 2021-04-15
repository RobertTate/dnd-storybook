const CAMPAIGNS = [
  {
    id: "1",
    name: "Umsvarladden",
    overview: "5 unlikely adventurers find themselves swept away to an ancient land, both lacking in magic and overflowing with it",
  }
]

const PLAYERS = [
  {
    id: "1",
    campaignIds: ["1"],
    name: "Bobby",
    userName: "oobob123",
    role: "ADVENTURER",
  },
  {
    id: "2",
    campaignIds: ["1"],
    name: "Anna",
    userName: "afrodigh",
    role: "ADVENTURER",
  }
]

const CHARACTERS = [
  {
    id: "1",
    playerId: "1",
    campaignIds: ["1"],
    name: "Sakoontra",
    race: "Water Genasi",
    class: "Monk",
    alignment: "Neutral Good",
    overview: "Super cool dude",
    pregameBackground: "Used to be lame",
    storyArch: "Got real cool over time",
    favoriteWeapon: "Spear",
    favoriteSpell: "Water Whip",
  },
  {
    id: "2",
    playerId: "2",
    campaignIds: ["1"],
    name: "Sigrid",
    race: "Forrest Gnome",
    class: "Druid",
    alignment: "Lawful Good",
    overview: "Loves Acorns",
    pregameBackground: "Looking for her sister. And a cure for the sick ancient tree she used to guard.",
    storyArch: "Found her sister, and a lot of acorns",
    favoriteWeapon: "Scythe",
    favoriteSpell: "Hex",
  }
]

const SESSIONS = [
  {
    id: "1",
    campaignId: "1",
    sessionNumber: "1",
    sessionTitle: "The 5 Proposals",
    dmOverview: "In Episode One, 5 strangers are all visited by a wizard by the name of Orren. He promises them all something they want, in exchange for agreeing to travel with him to an ancient land.",
  },
  {
    id: "2",
    campaignId: "1",
    sessionNumber: "2",
    sessionTitle: "A Tower of Shadows",
    dmOverview: "In Episode two, the group recovers as quick as they can from being hurled through portals. Only to be met with a violent welcome party.",
  }
]

const LOGS = [
  {
    id: "1",
    sessionId: "1",
    campaignId: "1",
    playerId: "1",
    characterId: "1",
    body: "Orren found me just as I regained consciousness from washing up ashore after a shipwreck. He offered me food, and revenge.",
  },
  {
    id: "2",
    sessionId: "1",
    campaignId: "1",
    playerId: "2",
    characterId: "2",
    body: "I had JUST left my community in search of my sister, when Orren found me. It wasn't long before we were under seige by unknown assailants. Likely who wanted my acorns.",
  }
]

module.exports = { CAMPAIGNS, PLAYERS, CHARACTERS, SESSIONS, LOGS }
