import type { LevelDef } from "../types";

/**
 * Level 6 — Honeycomb Hollow
 *
 * Map: level1-base.jpg (1408×1408)
 * Introduction to Bees! Open spaces allow player to practice baiting and dodging bee chases.
 */
export const level6: LevelDef = {
  id: "level-6",
  number: 6,
  name: "Honeycomb Hollow",
  objectiveText: "Dodge the bees and gather 8 golden blooms.",
  collectibleLabel: "Blooms",
  collectibleIcon: "sunflower",
  environment: {
    mapKey: "map-level-1",
    mapUrl: "/game/maps/level1-base.jpg",
    width: 1408,
    height: 1408,
    boundsInset: 40,
  },
  playerSpawn: { x: 704, y: 1240 },
  playerSpeed: 165,
  hearts: 3,
  music: "hollow",
  completeOn: "collect-all",
  exit: null,
  powerBlooms: [
    { kind: "swift", x: 704, y: 700 },
    { kind: "swift", x: 300, y: 440 },
  ],
  flowers: [
    { kind: "sunflower", x: 400, y: 400 },
    { kind: "sunflower", x: 1000, y: 400 },
    { kind: "daisy", x: 360, y: 840 },
    { kind: "daisy", x: 1040, y: 840 },
    { kind: "sunflower", x: 704, y: 460 },
    { kind: "daisy", x: 520, y: 680 },
    { kind: "daisy", x: 880, y: 680 },
    { kind: "sunflower", x: 704, y: 940 },
  ],
  hazards: [
    {
      kind: "bee",
      x: 704,
      y: 560,
      speed: 48,
      chaseSpeed: 215,
      detectRadius: 160,
      patrol: [
        { x: 704, y: 520 },
        { x: 880, y: 640 },
        { x: 704, y: 760 },
        { x: 520, y: 640 },
      ],
    },
    {
      kind: "bee",
      x: 320,
      y: 600,
      speed: 45,
      chaseSpeed: 210,
      detectRadius: 150,
      patrol: [
        { x: 260, y: 520 },
        { x: 380, y: 680 },
      ],
    },
    {
      kind: "beetle",
      x: 1100,
      y: 560,
      speed: 52,
      patrol: [
        { x: 1100, y: 460 },
        { x: 1100, y: 860 },
      ],
    },
  ],
  obstacles: [
    { kind: "tree", x: 140, y: 180, height: 180, collides: true },
    { kind: "tree", x: 1260, y: 170, height: 190, collides: true },
    { kind: "tree", x: 120, y: 1280, height: 160, collides: true },
    { kind: "tree", x: 1290, y: 1285, height: 170, collides: true },
    { kind: "bush", x: 500, y: 500, height: 72, collides: true },
    { kind: "bush", x: 900, y: 500, height: 70, collides: true },
    { kind: "rock", x: 704, y: 600, height: 66, collides: true },
    { kind: "stump", x: 420, y: 920, height: 60, collides: true },
    { kind: "pot", x: 980, y: 920, height: 56, collides: true },
  ],
  walls: [],
  completion: {
    winKicker: "Bee whisperer",
    winTitle: "Honeycomb Hollow complete",
    winBody: "Monnie outpaced the buzzing bees and gathered all {needed} golden blooms!",
    loseKicker: "Buzzed!",
    loseTitle: "Stung by bees",
    loseBody: "Monnie found {collected} of {needed} blooms. When bees get alert, change direction quickly!",
  },
};
