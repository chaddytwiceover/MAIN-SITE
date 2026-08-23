import * as Phaser from "phaser";
import { ACTION_FRAME, BEETLE_FRAME, PLAYER_FRAME } from "../config";
import { LEVELS } from "../levels";
import { patchGameState } from "../state";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    this.load.on("progress", (value: number) => {
      patchGameState({ loadProgress: value });
    });

    this.load.spritesheet("player", "/game/sprites/player.png", {
      frameWidth: PLAYER_FRAME,
      frameHeight: PLAYER_FRAME,
    });
    this.load.spritesheet("player-actions", "/game/sprites/player-actions.png", {
      frameWidth: ACTION_FRAME,
      frameHeight: ACTION_FRAME,
    });
    this.load.spritesheet("beetle", "/game/sprites/beetle-walk.png", {
      frameWidth: BEETLE_FRAME,
      frameHeight: BEETLE_FRAME,
    });

    this.load.image("daisy", "/game/sprites/daisy.png");
    this.load.image("tulip", "/game/sprites/tulip.png");
    this.load.image("rose", "/game/sprites/rose.png");
    this.load.image("sunflower", "/game/sprites/sunflower.png");
    this.load.image("bluebell", "/game/sprites/bluebell.png");
    this.load.image("tree", "/game/sprites/tree.png");
    this.load.image("bush", "/game/sprites/bush.png");
    this.load.image("rock", "/game/sprites/rock.png");
    this.load.image("stump", "/game/sprites/stump.png");
    this.load.image("pot", "/game/sprites/pot.png");
    this.load.image("arch", "/game/sprites/arch.png");
    this.load.image("heart", "/game/sprites/heart.png");
    this.load.image("gate-locked", "/game/sprites/gate-locked.png");
    this.load.image("gate-open", "/game/sprites/gate-open.png");
    this.load.image("bridge", "/game/sprites/bridge.png");
    this.load.image("water", "/game/sprites/water.png");

    for (const level of LEVELS) {
      this.load.image(level.environment.mapKey, level.environment.mapUrl);
    }
  }

  create() {
    const walk = (key: string, start: number, end: number) => {
      if (this.anims.exists(key)) return;
      this.anims.create({
        key,
        frames: this.anims.generateFrameNumbers("player", { start, end }),
        frameRate: 8,
        repeat: -1,
      });
    };
    walk("walk-down", 0, 3);
    walk("walk-left", 4, 7);
    walk("walk-right", 8, 11);
    walk("walk-up", 12, 15);
    if (!this.anims.exists("beetle-walk")) {
      this.anims.create({
        key: "beetle-walk",
        frames: this.anims.generateFrameNumbers("beetle", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });
    }

    // Spark particle
    const spark = this.add.graphics();
    spark.fillStyle(0xffffff, 1);
    spark.fillCircle(4, 4, 4);
    spark.generateTexture("spark", 8, 8);
    spark.destroy();

    // Alert "!" icon
    const alertG = this.add.graphics();
    alertG.fillStyle(0xd9383a, 1);
    alertG.fillCircle(10, 10, 9);
    alertG.lineStyle(1.5, 0xffffff, 1);
    alertG.strokeCircle(10, 10, 9);
    alertG.fillStyle(0xffffff, 1);
    alertG.fillRect(9, 4, 2, 6);
    alertG.fillRect(9, 12, 2, 2);
    alertG.generateTexture("alert-icon", 20, 20);
    alertG.destroy();

    // Bee Frames & Animation (48x48)
    this.createBeeTextures();

    // Wasp Frames & Animation (48x48)
    this.createWaspTextures();

    // Power Bloom Textures (Swift, Frost, Heart)
    this.createPowerBloomTextures();

    patchGameState({ assetsReady: true, loadProgress: 1, phase: "menu" });
    this.scene.start("wait");
  }

  private createBeeTextures() {
    for (let f = 0; f < 2; f++) {
      const g = this.add.graphics();
      // Body (yellow/amber oval)
      g.fillStyle(0xf5a623, 1);
      g.fillEllipse(24, 26, 22, 16);
      g.lineStyle(1.5, 0x3a271c, 1);
      g.strokeEllipse(24, 26, 22, 16);

      // Stripes (dark brown)
      g.fillStyle(0x3a271c, 1);
      g.fillRect(20, 19, 3, 14);
      g.fillRect(26, 19, 3, 14);

      // Head
      g.fillStyle(0x3a271c, 1);
      g.fillCircle(35, 26, 5);
      g.fillStyle(0xffffff, 1);
      g.fillCircle(36, 25, 1.5);

      // Wings (translucent light blue)
      g.fillStyle(0xe0f2fe, 0.75);
      g.lineStyle(1, 0xbae6fd, 0.9);
      if (f === 0) {
        g.fillEllipse(20, 14, 12, 16);
        g.strokeEllipse(20, 14, 12, 16);
      } else {
        g.fillEllipse(22, 16, 14, 12);
        g.strokeEllipse(22, 16, 14, 12);
      }

      g.generateTexture(`bee-frame-${f}`, 48, 48);
      g.destroy();
    }

    if (!this.anims.exists("bee-fly")) {
      this.anims.create({
        key: "bee-fly",
        frames: [{ key: "bee-frame-0" }, { key: "bee-frame-1" }],
        frameRate: 12,
        repeat: -1,
      });
    }
  }

  private createWaspTextures() {
    for (let f = 0; f < 2; f++) {
      const g = this.add.graphics();
      // Abdomen (pointy red-orange)
      g.fillStyle(0xd9383a, 1);
      g.fillTriangle(10, 26, 24, 18, 24, 34);
      g.lineStyle(1.5, 0x24140e, 1);
      g.strokeTriangle(10, 26, 24, 18, 24, 34);

      // Thorax & Head (dark chitin)
      g.fillStyle(0x24140e, 1);
      g.fillCircle(27, 26, 7);
      g.fillCircle(36, 26, 5);
      g.fillStyle(0xff6b6b, 1);
      g.fillCircle(37, 24, 1.5);

      // Wings
      g.fillStyle(0xfecdd3, 0.75);
      g.lineStyle(1, 0xffa4a4, 0.9);
      if (f === 0) {
        g.fillEllipse(24, 12, 10, 18);
        g.strokeEllipse(24, 12, 10, 18);
      } else {
        g.fillEllipse(25, 14, 14, 12);
        g.strokeEllipse(25, 14, 14, 12);
      }

      g.generateTexture(`wasp-frame-${f}`, 48, 48);
      g.destroy();
    }

    if (!this.anims.exists("wasp-fly")) {
      this.anims.create({
        key: "wasp-fly",
        frames: [{ key: "wasp-frame-0" }, { key: "wasp-frame-1" }],
        frameRate: 15,
        repeat: -1,
      });
    }
  }

  private createPowerBloomTextures() {
    // 1. Swift Seed (Golden Radiant Star)
    const swiftG = this.add.graphics();
    swiftG.fillStyle(0xffd700, 1);
    swiftG.fillCircle(24, 24, 12);
    swiftG.fillStyle(0xfff3a1, 1);
    swiftG.fillCircle(24, 24, 7);
    swiftG.lineStyle(2, 0xffaa00, 1);
    swiftG.strokeCircle(24, 24, 12);
    // 4 star points
    swiftG.fillStyle(0xffd700, 1);
    swiftG.fillTriangle(24, 4, 18, 20, 30, 20);
    swiftG.fillTriangle(24, 44, 18, 28, 30, 28);
    swiftG.fillTriangle(4, 24, 20, 18, 20, 30);
    swiftG.fillTriangle(44, 24, 28, 18, 28, 30);
    swiftG.generateTexture("bloom-swift", 48, 48);
    swiftG.destroy();

    // 2. Frost Petal (Ice-Blue Diamond Crystal)
    const frostG = this.add.graphics();
    frostG.fillStyle(0x70d6ff, 1);
    frostG.fillTriangle(24, 6, 12, 24, 36, 24);
    frostG.fillTriangle(24, 42, 12, 24, 36, 24);
    frostG.fillStyle(0xe0f7ff, 1);
    frostG.fillTriangle(24, 12, 16, 24, 32, 24);
    frostG.fillTriangle(24, 36, 16, 24, 32, 24);
    frostG.lineStyle(2, 0x0096c7, 1);
    frostG.strokeTriangle(24, 6, 12, 24, 36, 24);
    frostG.strokeTriangle(24, 42, 12, 24, 36, 24);
    frostG.generateTexture("bloom-frost", 48, 48);
    frostG.destroy();

    // 3. Heart Leaf (Emerald Radiant Heart)
    const heartG = this.add.graphics();
    heartG.fillStyle(0x50c878, 1);
    heartG.fillCircle(18, 18, 9);
    heartG.fillCircle(30, 18, 9);
    heartG.fillTriangle(10, 21, 38, 21, 24, 38);
    heartG.fillStyle(0xb7e3a1, 1);
    heartG.fillCircle(20, 16, 4);
    heartG.lineStyle(2, 0x245c3a, 1);
    heartG.strokeCircle(18, 18, 9);
    heartG.strokeCircle(30, 18, 9);
    heartG.generateTexture("bloom-heart", 48, 48);
    heartG.destroy();
  }
}

