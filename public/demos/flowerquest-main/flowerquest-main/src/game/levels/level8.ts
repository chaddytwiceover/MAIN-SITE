import type { LevelDef } from "../types";

/**
 * Level 8 — The Wasp Garden
 *
 * Map: level3-base.jpg (1008×1792)
 * Introduction to Wasps! Wasps guard bridge choke points and flower patches.
 */
export const level8: LevelDef = {
  id: "level-8",
  number: 8,
  name: "The Wasp Garden",
  objectiveText: "Slip past the territorial wasps and collect 8 guarded blooms.",
  collectibleLabel: "Blooms",
  collectibleIcon: "sunflower",
  environment: {
    mapKey: "map-level-3",
    mapUrl: "/game/maps/level3-base.jpg",
    width: 1008,
    height: 1792,
    boundsInset: 40,
  },
  playerSpawn: { x: 504, y: 1680 },
  playerSpeed: 165,
  hearts: 4,
  music: "crossing",
  completeOn: "reach-exit",
  powerBlooms: [
    { kind: "frost", x: 280, y: 1480 },
    { kind: "heart", x: 720, y: 320 },
  ],
  exit: {
    x: 504,
    y: 130,
    unlockAt: "all-flowers",
    lockedHint: "Collect all 8 blooms first!",
    unlockedHint: "The river gate has unlocked!",
    unlockedObjective: "Reach the river gate.",
  },
  objectives: [{ type: "collect", collectible: "any", required: 8, label: "Blooms" }],
  flowers: [
    { kind: "sunflower", x: 230, y: 1560 },
    { kind: "sunflower", x: 800, y: 1500 },
    { kind: "sunflower", x: 504, y: 920 },
    { kind: "sunflower", x: 230, y: 320 },
    { kind: "sunflower", x: 790, y: 320 },
    { kind: "sunflower", x: 504, y: 220 },
    { kind: "bluebell", x: 320, y: 700 },
    { kind: "rose", x: 700, y: 700 },
  ],
  hazards: [
    {
      kind: "wasp",
      x: 504,
      y: 1244,
      speed: 55,
      chaseSpeed: 240,
      guardZone: { x: 504, y: 1244, radius: 130 },
      leashRadius: 260,
    },
    {
      kind: "wasp",
      x: 310,
      y: 478,
      speed: 55,
      chaseSpeed: 240,
      guardZone: { x: 310, y: 478, radius: 130 },
      leashRadius: 260,
    },
    {
      kind: "bee",
      x: 710,
      y: 700,
      speed: 50,
      chaseSpeed: 215,
      detectRadius: 150,
      patrol: [
        { x: 600, y: 700 },
        { x: 820, y: 700 },
      ],
    },
    {
      kind: "bee",
      x: 504,
      y: 1480,
      speed: 49,
      chaseSpeed: 215,
      detectRadius: 150,
      patrol: [
        { x: 340, y: 1480 },
        { x: 660, y: 1480 },
      ],
    },
  ],
  obstacles: [
    { kind: "tree", x: 70, y: 120, height: 168, collides: true },
    { kind: "tree", x: 940, y: 120, height: 172, collides: true },
    { kind: "tree", x: 70, y: 1710, height: 156, collides: true },
    { kind: "tree", x: 940, y: 1710, height: 160, collides: true },
    { kind: "bush", x: 200, y: 1080, height: 68, collides: true },
    { kind: "bush", x: 800, y: 1080, height: 68, collides: true },
    { kind: "rock", x: 160, y: 980, height: 62, collides: true },
    { kind: "rock", x: 860, y: 980, height: 64, collides: true },
    { kind: "pot", x: 440, y: 210, height: 50, collides: true },
    { kind: "pot", x: 570, y: 210, height: 52, collides: true },
  ],
  walls: [
    { x: 0, y: 0, w: 430, h: 80 },
    { x: 578, y: 0, w: 430, h: 80 },
  ],
  water: [
    { x: 0, y: 1160, w: 380, h: 170 },
    { x: 628, y: 1160, w: 380, h: 170 },
    { x: 0, y: 400, w: 190, h: 160 },
    { x: 430, y: 400, w: 160, h: 160 },
    { x: 830, y: 400, w: 178, h: 160 },
  ],
  bridges: [
    { x: 504, y: 1244, displayWidth: 210, displayHeight: 168 },
    { x: 310, y: 478, displayWidth: 200, displayHeight: 160 },
    { x: 710, y: 478, displayWidth: 200, displayHeight: 160 },
  ],
  completion: {
    winKicker: "Guards evaded",
    winTitle: "The Wasp Garden complete",
    winBody: "Monnie safely crossed the guarded bridges, collected every bloom, and reached safety.",
    loseKicker: "Territory guarded!",
    loseTitle: "Stung by wasps",
    loseBody: "Monnie found {collected} of {needed} blooms. Wasps protect their zone — don't linger near them!",
  },
};
