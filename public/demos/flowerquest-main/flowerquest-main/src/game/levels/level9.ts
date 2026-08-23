import type { LevelDef } from "../types";

/**
 * Level 9 — Nightshade Run
 *
 * Map: level4-base.jpg (1152×1728)
 * High-intensity dual courtyard with guarding wasps and patrolling bees.
 */
export const level9: LevelDef = {
  id: "level-9",
  number: 9,
  name: "Nightshade Run",
  objectiveText: "Gather 4 roses and 4 bluebells under the watchful wasps.",
  collectibleLabel: null,
  collectibleIcon: "bluebell",
  environment: {
    mapKey: "map-level-4",
    mapUrl: "/game/maps/level4-base.jpg",
    width: 1152,
    height: 1728,
    boundsInset: 42,
  },
  playerSpawn: { x: 576, y: 1580 },
  playerSpeed: 165,
  hearts: 4,
  music: "twin",
  completeOn: "reach-exit",
  powerBlooms: [
    { kind: "swift", x: 576, y: 1300 },
    { kind: "frost", x: 260, y: 700 },
    { kind: "heart", x: 880, y: 700 },
  ],
  objectives: [
    { type: "collect", collectible: "rose", required: 4, label: "Roses" },
    { type: "collect", collectible: "bluebell", required: 4, label: "Bluebells" },
  ],
  exit: {
    x: 576,
    y: 180,
    unlockAt: "all-flowers",
    lockedHint: "Collect all 8 twin blooms first!",
    unlockedHint: "The Nightshade Gate has opened!",
    unlockedObjective: "Reach the garden gate.",
  },
  flowers: [
    { kind: "rose", x: 220, y: 1400 },
    { kind: "rose", x: 300, y: 1040 },
    { kind: "rose", x: 180, y: 640 },
    { kind: "rose", x: 340, y: 360 },
    { kind: "bluebell", x: 940, y: 1400 },
    { kind: "bluebell", x: 860, y: 1040 },
    { kind: "bluebell", x: 960, y: 640 },
    { kind: "bluebell", x: 820, y: 360 },
  ],
  hazards: [
    {
      kind: "wasp",
      x: 250,
      y: 920,
      speed: 55,
      chaseSpeed: 250,
      guardZone: { x: 250, y: 920, radius: 140 },
      leashRadius: 280,
    },
    {
      kind: "wasp",
      x: 900,
      y: 920,
      speed: 55,
      chaseSpeed: 250,
      guardZone: { x: 900, y: 920, radius: 140 },
      leashRadius: 280,
    },
    {
      kind: "bee",
      x: 576,
      y: 960,
      speed: 52,
      chaseSpeed: 230,
      detectRadius: 160,
      patrol: [
        { x: 576, y: 800 },
        { x: 576, y: 1120 },
      ],
    },
    {
      kind: "bee",
      x: 576,
      y: 480,
      speed: 52,
      chaseSpeed: 230,
      detectRadius: 160,
      patrol: [
        { x: 420, y: 480 },
        { x: 730, y: 480 },
      ],
    },
    {
      kind: "beetle",
      x: 576,
      y: 1360,
      speed: 54,
      patrol: [
        { x: 400, y: 1360 },
        { x: 750, y: 1360 },
      ],
    },
  ],
  obstacles: [
    { kind: "tree", x: 80, y: 140, height: 170, collides: true },
    { kind: "tree", x: 1070, y: 140, height: 174, collides: true },
    { kind: "tree", x: 80, y: 1660, height: 156, collides: true },
    { kind: "tree", x: 1070, y: 1660, height: 160, collides: true },
    { kind: "bush", x: 180, y: 1080, height: 70, collides: true },
    { kind: "bush", x: 360, y: 640, height: 68, collides: true },
    { kind: "rock", x: 960, y: 1080, height: 64, collides: true },
    { kind: "rock", x: 800, y: 640, height: 62, collides: true },
    { kind: "pot", x: 500, y: 280, height: 50, collides: true },
    { kind: "pot", x: 650, y: 280, height: 52, collides: true },
  ],
  walls: [
    { x: 0, y: 0, w: 500, h: 88 },
    { x: 652, y: 0, w: 500, h: 88 },
  ],
  completion: {
    winKicker: "Night conquered",
    winTitle: "Nightshade Run complete",
    winBody: "Monnie conquered the twin courts, dodged the swarming wasps, and opened the gate.",
    loseKicker: "Overwhelmed!",
    loseTitle: "Lost in the night",
    loseBody: "Monnie collected {collected} of {needed} blooms. Use Swift Seeds to dash through the central court!",
  },
};
