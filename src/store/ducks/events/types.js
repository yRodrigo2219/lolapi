export const EVENTS = Object.freeze({
  KILL: 'kill',
  STRUCTURE: 'structure',
  DRAGON: 'dragon',
  MONSTER: 'monster',
  GAME: 'game',
});

export const EVENT = Object.freeze({
  STRUCTURE: {
    TOWER: 'tower',
    INHIB: 'inhibitor',
  },
  DRAGON: {
    MOUNTAIN: 'mountain',
    INFERNAL: 'infernal',
    WATER: 'water',
    CLOUD: 'cloud',
    ELDER: 'elder',
  },
  MONSTER: {
    BARON: 'baron',
    HERALD: 'herald',
  },
  GAME: {
    PAUSED: 'paused',
    FINISHED: 'finished',
    RESUME: 'resume'
  },
});