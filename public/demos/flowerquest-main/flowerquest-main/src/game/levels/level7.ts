import type { LevelDef } from "../types";

/**
 * Level 7 — Briar Patch
 *
 * Map: level2-base.jpg (1152×1728)
 * Tighter corridor trails with patrolling bees and beetles.
 */
export const level7: LevelDef = {
  id: "level-7",
  number: 7,
  name: "Briar Patch",
  objectiveText: "Gather 10 mixed flowers, then reach the bramble gate.",
  collectibleLabel: "Flowers",
  collectibleIcon: "rose",
  environment: {
    mapKey: "map-level-2",
    mapUrl: "/game/maps/level2-base.jpg",
    width: 1152,
    height: 1728,
    boundsInset: 42,
  },
  playerSpawn: { x: 576, y: 1580 },
  playerSpeed: 165,
  hearts: 3,
  music: "hollow",
  completeOn: "reach-exit",
  powerBlooms: [
    { kind: "swift", x: 260, y: 1200 },
    { kind: "frost", x: 920, y: 880 },
  ],
  objectives: [{ type: "collect", collectible: "any", required: 10, label: "Flowers" }],
  exit: {
    x: 576,
    y: 210,
    unlockAt: "all-flowers",
    lockedHint: "Gather all 10 flowers first!",
    unlockedHint: "The Bramble Gate has opened!",
    unlockedObjective: "Reach the bramble gate.",
  },
  flowers: [
    { kind: "rose", x: 240, y: 1440 },
    { kind: "tulip", x: 920, y: 1400 },
    { kind: "rose", x: 280, y: 980 },
    { kind: "tulip", x: 880, y: 720 },
    { kind: "rose", x: 380, y: 480 },
    { kind: "tulip", x: 780, y: 480 },
    { kind: "rose", x: 576, y: 320 },
    { kind: "bluebell", x: 240, y: 760 },
    { kind: "sunflower", x: 900, y: 980 },
    { kind: "daisy", x: 576, y: 620 },
  ],
  hazards: [
    {
      kind: "bee",
      x: 576,
      y: 1100,
      speed: 48,
      chaseSpeed: 215,
      detectRadius: 160,
      patrol: [
        { x: 420, y: 1100 },
        { x: 740, y: 1100 },
      ],
    },
    {
      kind: "bee",
      x: 360,
      y: 640,
      speed: 50,
      chaseSpeed: 215,
      detectRadius: 160,
      patrol: [
        { x: 360, y: 520 },
        { x: 360, y: 780 },
      ],
    },
    {
      kind: "bee",
      x: 800,
      y: 920,
      speed: 50,
      chaseSpeed: 215,
      detectRadius: 160,
      patrol: [
        { x: 720, y: 820 },
        { x: 900, y: 1020 },
      ],
    },
    {
      kind: "beetle",
      x: 840,
      y: 600,
      speed: 56,
      patrol: [
        { x: 720, y: 600 },
        { x: 960, y: 600 },
      ],
    },
    {
      kind: "beetle",
      x: 576,
      y: 840,
      speed: 52,
      patrol: [
        { x: 480, y: 840 },
        { x: 680, y: 840 },
      ],
    },
  ],
  obstacles: [
    { kind: "tree", x: 70, y: 170, height: 176, collides: true },
    { kind: "tree", x: 1080, y: 165, height: 182, collides: true },
    { kind: "tree", x: 80, y: 1640, height: 158, collides: true },
    { kind: "tree", x: 1085, y: 1650, height: 164, collides: true },
    { kind: "tree", x: 150, y: 400, height: 160, collides: true },
    { kind: "tree", x: 1010, y: 390, height: 168, collides: true },
    { kind: "bush", x: 400, y: 1120, height: 70, collides: true },
    { kind: "bush", x: 780, y: 900, height: 68, collides: true },
    { kind: "rock", x: 180, y: 1320, height: 64, collides: true },
    { kind: "rock", x: 1000, y: 640, height: 66, collides: true },
    { kind: "pot", x: 500, y: 300, height: 52, collides: true },
    { kind: "pot", x: 650, y: 318, height: 54, collides: true },
  ],
  walls: [
    { x: 0, y: 0, w: 500, h: 96 },
    { x: 652, y: 0, w: 500, h: 96 },
  ],
  completion: {
    winKicker: "Thorns braved",
    winTitle: "Briar Patch complete",
    winBody: "Monnie navigated the thorny trail, collected every bloom, and opened the gate.",
    loseKicker: "Pricked!",
    loseTitle: "Lost in the briars",
    loseBody: "Monnie collected {collected} of {needed} blooms. Use Frost Petals to freeze chasing bees!",
  },
};
