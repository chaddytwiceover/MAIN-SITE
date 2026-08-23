import type * as Phaser from "phaser";
import { sfxFreeze, sfxPowerUp } from "../audio";
import { patchGameState } from "../state";
import type { PowerUpKind } from "../types";
import { gainHeart } from "./lives";
import type { PlayerRef } from "../entities/player";
import type { HazardRef } from "./hazards";

export type ActiveBuff = {
  kind: PowerUpKind;
  expiresAt: number;
  durationMs: number;
};

let currentBuff: ActiveBuff | null = null;
let playerSpeedMultiplier = 1;
let frostActive = false;

const POWERUP_NAMES: Record<PowerUpKind, string> = {
  swift: "Swift Seed",
  frost: "Frost Petal",
  heart: "Heart Leaf",
};

export function getPlayerSpeedMultiplier(): number {
  return playerSpeedMultiplier;
}

export function isFrostActive(): boolean {
  return frostActive;
}

export function triggerPowerUp(
  scene: Phaser.Scene,
  kind: PowerUpKind,
  player: PlayerRef,
  hazards: HazardRef[],
) {
  const now = scene.time.now;

  if (kind === "heart") {
    gainHeart();
    sfxPowerUp();

    const burst = scene.add.particles(player.sprite.x, player.sprite.y, "spark", {
      speed: { min: 40, max: 90 },
      lifespan: 360,
      scale: { start: 0.8, end: 0 },
      tint: [0x50c878, 0xb7e3a1, 0xffffff],
      quantity: 12,
      emitting: false,
    });
    burst.explode(12);
    scene.time.delayedCall(400, () => burst.destroy());
    return;
  }

  const durationMs = kind === "swift" ? 4000 : 3000;
  currentBuff = {
    kind,
    expiresAt: now + durationMs,
    durationMs,
  };

  if (kind === "swift") {
    playerSpeedMultiplier = 1.5;
    sfxPowerUp();
    player.sprite.setTint(0xffe066);

    const burst = scene.add.particles(player.sprite.x, player.sprite.y, "spark", {
      speed: { min: 40, max: 100 },
      lifespan: 350,
      scale: { start: 0.9, end: 0 },
      tint: [0xffd700, 0xffe066, 0xffffff],
      quantity: 14,
      emitting: false,
    });
    burst.explode(14);
    scene.time.delayedCall(400, () => burst.destroy());
  } else if (kind === "frost") {
    frostActive = true;
    sfxFreeze();
    scene.cameras.main.flash(120, 160, 230, 255);

    hazards.forEach((hazard) => {
      hazard.sprite.setTint(0x70d6ff);
      hazard.sprite.setVelocity(0, 0);
    });
  }

  patchGameState({
    activePowerUp: {
      kind,
      label: POWERUP_NAMES[kind],
      expiresAt: currentBuff.expiresAt,
      durationMs,
    },
  });
}

export function updatePowerUps(
  scene: Phaser.Scene,
  player: PlayerRef,
  hazards: HazardRef[],
  now: number,
) {
  if (!currentBuff) return;

  if (now >= currentBuff.expiresAt) {
    clearPowerUps(player, hazards);
  } else if (currentBuff.kind === "swift") {
    const vx = player.sprite.body?.velocity.x ?? 0;
    const vy = player.sprite.body?.velocity.y ?? 0;
    if (Math.hypot(vx, vy) > 20 && Math.random() < 0.35) {
      const spark = scene.add.particles(
        player.sprite.x + (Math.random() - 0.5) * 16,
        player.sprite.y + (Math.random() - 0.5) * 16,
        "spark",
        {
          speed: { min: 10, max: 25 },
          lifespan: 200,
          scale: { start: 0.5, end: 0 },
          tint: [0xffd700, 0xffe066],
          quantity: 1,
          emitting: false,
        },
      );
      spark.explode(1);
      scene.time.delayedCall(220, () => spark.destroy());
    }
  }
}

export function clearPowerUps(player?: PlayerRef, hazards?: HazardRef[]) {
  currentBuff = null;
  playerSpeedMultiplier = 1;
  frostActive = false;

  if (player?.sprite.active) {
    player.sprite.clearTint();
  }

  if (hazards) {
    hazards.forEach((hazard) => {
      if (hazard.sprite.active) {
        hazard.sprite.clearTint();
      }
    });
  }

  patchGameState({ activePowerUp: null });
}
