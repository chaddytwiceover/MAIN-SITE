import type { LevelDef } from "../types";

/**
 * Level 10 — The Queen's Garden (Grand Finale)
 *
 * Map: level5-base.jpg (1152×1728)
 * The ultimate test of movement, timing, and power-up usage in the royal hedge maze.
 */
export const level10: LevelDef = {
  id: "level-10",
  number: 10,
  name: "The Queen's Garden",
  objectiveText: "Gather all 15 royal blooms to unlock the Queen's Golden Gate!",
  collectibleLabel: "Royal Blooms",
  collectibleIcon: "rose",
  environment: {
    mapKey: "map-level-5",
    mapUrl: "/game/maps/level5-base.jpg",
    width: 1152,
    height: 1728,
    boundsInset: 40,
  },
  playerSpawn: { x: 576, y: 1580 },
  playerSpeed: 165,
  hearts: 4,
  music: "queen",
  completeOn: "reach-exit",
  powerBlooms: [
    { kind: "swift", x: 576, y: 1360 },
    { kind: "frost", x: 90, y: 880 },
    { kind: "frost", x: 920, y: 360 },
    { kind: "heart", x: 1050, y: 560 },
  ],
  objectives: [{ type: "collect", collectible: "any", required: 15, label: "Royal Blooms" }],
  exit: {
    x: 576,
    y: 150,
    unlockAt: "all-flowers",
    lockedHint: "Gather all 15 Royal Blooms first!",
    unlockedHint: "The Queen's Golden Gate has unlocked!",
    unlockedObjective: "Step through the Queen's Golden Gate!",
  },
  flowers: [
    { kind: "rose", x: 576, y: 1460 },
    { kind: "rose", x: 250, y: 980 },
    { kind: "rose", x: 880, y: 980 },
    { kind: "rose", x: 576, y: 720 },
    { kind: "rose", x: 90, y: 680 },
    { kind: "rose", x: 1050, y: 200 },
    { kind: "rose", x: 220, y: 380 },
    { kind: "rose", x: 880, y: 380 },
    { kind: "bluebell", x: 350, y: 1220 },
    { kind: "bluebell", x: 820, y: 1220 },
    { kind: "sunflower", x: 350, y: 820 },
    { kind: "sunflower", x: 820, y: 820 },
    { kind: "tulip", x: 576, y: 560 },
    { kind: "daisy", x: 220, y: 1120 },
    { kind: "daisy", x: 920, y: 1120 },
  ],
  hazards: [
    {
      kind: "wasp",
      x: 576,
      y: 720,
      speed: 60,
      chaseSpeed: 260,
      guardZone: { x: 576, y: 720, radius: 150 },
      leashRadius: 300,
    },
    {
      kind: "wasp",
      x: 576,
      y: 280,
      speed: 60,
      chaseSpeed: 260,
      guardZone: { x: 576, y: 280, radius: 140 },
      leashRadius: 260,
    },
    {
      kind: "wasp",
      x: 250,
      y: 1080,
      speed: 60,
      chaseSpeed: 260,
      guardZone: { x: 250, y: 1080, radius: 140 },
      leashRadius: 280,
    },
    {
      kind: "bee",
      x: 250,
      y: 600,
      speed: 55,
      chaseSpeed: 215,
      detectRadius: 170,
      patrol: [
        { x: 250, y: 440 },
        { x: 250, y: 840 },
      ],
    },
    {
      kind: "bee",
      x: 880,
      y: 600,
      speed: 55,
      chaseSpeed: 215,
      detectRadius: 170,
      patrol: [
        { x: 880, y: 440 },
        { x: 880, y: 840 },
      ],
    },
    {
      kind: "bee",
      x: 576,
      y: 980,
      speed: 55,
      chaseSpeed: 215,
      detectRadius: 170,
      patrol: [
        { x: 460, y: 980 },
        { x: 690, y: 980 },
      ],
    },
    {
      kind: "beetle",
      x: 576,
      y: 1100,
      speed: 58,
      patrol: [
        { x: 420, y: 1100 },
        { x: 730, y: 1100 },
      ],
    },
    {
      kind: "beetle",
      x: 576,
      y: 420,
      speed: 58,
      patrol: [
        { x: 480, y: 420 },
        { x: 670, y: 420 },
      ],
    },
    {
      kind: "beetle",
      x: 900,
      y: 1040,
      speed: 58,
      patrol: [
        { x: 820, y: 940 },
        { x: 980, y: 1160 },
      ],
    },
  ],
  obstacles: [
    { kind: "arch", x: 576, y: 1320, height: 150, collides: false },
    { kind: "arch", x: 576, y: 430, height: 150, collides: false },
    { kind: "tree", x: 80, y: 120, height: 160, collides: true },
    { kind: "tree", x: 1070, y: 120, height: 164, collides: true },
    { kind: "tree", x: 80, y: 1660, height: 150, collides: true },
    { kind: "tree", x: 1070, y: 1660, height: 154, collides: true },
    { kind: "pot", x: 500, y: 250, height: 50, collides: true },
    { kind: "pot", x: 650, y: 250, height: 52, collides: true },
    { kind: "bush", x: 200, y: 1480, height: 64, collides: true },
    { kind: "rock", x: 940, y: 1480, height: 60, collides: true },
  ],
  walls: [
    // North plaza — gate gap 500–652
    { x: 0, y: 0, w: 500, h: 90 },
    { x: 652, y: 0, w: 500, h: 90 },

    // Upper hedge with three corridor gaps
    { x: 0, y: 220, w: 160, h: 80 },
    { x: 340, y: 220, w: 146, h: 80 },
    { x: 666, y: 220, w: 146, h: 80 },
    { x: 992, y: 220, w: 108, h: 80 },

    { x: 1100, y: 90, w: 52, h: 210 },

    // Vertical hedge between left and center
    { x: 340, y: 300, w: 146, h: 580 },
    { x: 340, y: 1060, w: 146, h: 228 },

    // Vertical hedge between center and right
    { x: 666, y: 300, w: 146, h: 580 },
    { x: 666, y: 1060, w: 146, h: 228 },

    // Outer west hedge with alcove
    { x: 0, y: 300, w: 160, h: 300 },
    { x: 0, y: 600, w: 40, h: 160 },
    { x: 0, y: 760, w: 160, h: 528 },

    // Outer east hedge
    { x: 992, y: 300, w: 160, h: 988 },

    // South entrance hedge
    { x: 0, y: 1288, w: 160, h: 72 },
    { x: 340, y: 1288, w: 146, h: 72 },
    { x: 666, y: 1288, w: 146, h: 72 },
    { x: 992, y: 1288, w: 160, h: 72 },

    { x: 0, y: 1360, w: 80, h: 368 },
    { x: 1072, y: 1360, w: 80, h: 368 },
  ],
  completion: {
    winKicker: "Master of the Quest",
    winTitle: "Monnie's Flower Quest Complete!",
    winBody: "Incredible! Monnie conquered all 10 garden realms, outmaneuvered every swarm, and claimed the Golden Bloom!",
    loseKicker: "The Queen Prevails",
    loseTitle: "Defeated in the Royal Maze",
    loseBody: "Monnie gathered {collected} of {needed} Royal Blooms. Time your Frost Petals and Swift Seeds carefully!",
  },
};
