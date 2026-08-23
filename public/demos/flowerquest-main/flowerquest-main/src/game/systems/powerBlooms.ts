import * as Phaser from "phaser";
import { POWER_BLOOM_DISPLAY } from "../config";
import type { LevelDef, PowerUpKind } from "../types";

export type PowerBloomRef = Phaser.Physics.Arcade.Sprite;

const BLOOM_COLORS: Record<PowerUpKind, number> = {
  swift: 0xffd700,
  frost: 0x70d6ff,
  heart: 0x50c878,
};

export function placePowerBlooms(scene: Phaser.Scene, level: LevelDef): PowerBloomRef[] {
  const blooms: PowerBloomRef[] = [];
  if (!level.powerBlooms || level.powerBlooms.length === 0) return blooms;

  for (const spot of level.powerBlooms) {
    const color = BLOOM_COLORS[spot.kind] ?? 0xffd700;
    const texKey = `bloom-${spot.kind}`;

    const glow = scene.add.sprite(spot.x, spot.y + 4, texKey);
    glow.setOrigin(0.5, 0.7);
    glow.setAlpha(0.4);
    glow.setTint(color);
    glow.setBlendMode(Phaser.BlendModes.ADD);
    glow.setDepth(spot.y - 2);

    const bloom = scene.physics.add.sprite(spot.x, spot.y, texKey);
    const src = bloom.height || 1;
    const scale = POWER_BLOOM_DISPLAY / src;
    bloom.setScale(scale);
    glow.setScale(scale * 1.6);
    bloom.setOrigin(0.5, 0.7);
    bloom.body?.setAllowGravity(false);
    bloom.body?.setImmovable(true);
    bloom.body?.setCircle(Math.max(64, src * 0.35));
    bloom.setData("kind", spot.kind);
    bloom.setData("glow", glow);
    bloom.setDepth(spot.y);

    scene.tweens.add({
      targets: [bloom, glow],
      y: spot.y - 9,
      duration: 800 + Math.random() * 300,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });

    scene.tweens.add({
      targets: glow,
      alpha: 0.15,
      scale: scale * 1.9,
      duration: 900 + Math.random() * 300,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });

    blooms.push(bloom);
  }

  return blooms;
}

export function findNearbyPowerBloom(
  blooms: PowerBloomRef[],
  x: number,
  y: number,
  radius = 48,
): PowerBloomRef | null {
  for (const bloom of blooms) {
    if (!bloom.active) continue;
    if (Phaser.Math.Distance.Between(x, y, bloom.x, bloom.y) < radius) {
      return bloom;
    }
  }
  return null;
}
