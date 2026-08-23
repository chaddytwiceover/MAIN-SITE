import * as Phaser from "phaser";
import { BEETLE_DISPLAY, BEETLE_FRAME, BEE_DISPLAY, WASP_DISPLAY } from "../config";
import { sfxAlert } from "../audio";
import type { HazardDef, HazardKind, Point } from "../types";

export type PestState = "patrol" | "alert" | "chase" | "cooldown" | "guard" | "aggro" | "return";

export type PestRef = {
  sprite: Phaser.Physics.Arcade.Sprite;
  kind: HazardKind;
  patrol: Point[];
  index: number;
  speed: number;
  chaseSpeed: number;
  detectRadius: number;
  origin: Point;
  state: PestState;
  stateTimer: number;
  alertIcon?: Phaser.GameObjects.Sprite;
  guardZone: { x: number; y: number; radius: number };
  leashRadius: number;
};

export function createPest(scene: Phaser.Scene, def: HazardDef): PestRef {
  const kind = def.kind ?? "beetle";
  let sprite: Phaser.Physics.Arcade.Sprite;
  let alertIcon: Phaser.GameObjects.Sprite | undefined;

  const origin = { x: def.x, y: def.y };
  const patrol = def.patrol && def.patrol.length > 0 ? def.patrol : [{ x: def.x, y: def.y }];
  const speed = def.speed;
  const chaseSpeed = def.chaseSpeed ?? speed * 1.5;
  const detectRadius = def.detectRadius ?? (kind === "bee" ? 160 : 120);
  const guardZone = def.guardZone ?? { x: def.x, y: def.y, radius: 120 };
  const leashRadius = def.leashRadius ?? 240;

  if (kind === "bee") {
    sprite = scene.physics.add.sprite(def.x, def.y, "bee", 0);
    const scale = BEE_DISPLAY / (sprite.height || 48);
    sprite.setScale(scale);
    sprite.setOrigin(0.5, 0.5);
    sprite.body?.setCircle(18, 6, 6);
    sprite.setDepth(def.y);
    sprite.play("bee-fly");

    alertIcon = scene.add.sprite(def.x, def.y - 28, "alert-icon");
    alertIcon.setOrigin(0.5, 0.5);
    alertIcon.setAlpha(0);
    alertIcon.setDepth(def.y + 10);
  } else if (kind === "wasp") {
    sprite = scene.physics.add.sprite(def.x, def.y, "wasp", 0);
    const scale = WASP_DISPLAY / (sprite.height || 48);
    sprite.setScale(scale);
    sprite.setOrigin(0.5, 0.5);
    sprite.body?.setCircle(20, 4, 4);
    sprite.setDepth(def.y);
    sprite.play("wasp-fly");
  } else {
    sprite = scene.physics.add.sprite(def.x, def.y, "beetle", 0);
    const scale = BEETLE_DISPLAY / BEETLE_FRAME;
    sprite.setScale(scale);
    sprite.setOrigin(0.5, 0.7);
    sprite.body?.setCircle(40, 24, 36);
    sprite.setDepth(def.y);
    sprite.play("beetle-walk");
  }

  return {
    sprite,
    kind,
    patrol,
    index: 0,
    speed,
    chaseSpeed,
    detectRadius,
    origin,
    state: kind === "wasp" ? "guard" : "patrol",
    stateTimer: 0,
    alertIcon,
    guardZone,
    leashRadius,
  };
}

function jammedToward(
  sprite: Phaser.Physics.Arcade.Sprite,
  dx: number,
  dy: number,
): boolean {
  const body = sprite.body as Phaser.Physics.Arcade.Body | null;
  if (!body) return false;
  return (
    (dx < 0 && body.blocked.left) ||
    (dx > 0 && body.blocked.right) ||
    (dy < 0 && body.blocked.up) ||
    (dy > 0 && body.blocked.down)
  );
}

export function updatePest(
  pest: PestRef,
  playerX: number,
  playerY: number,
  now: number,
  isFrozen: boolean,
) {
  const { sprite } = pest;
  if (!sprite.active) return;

  if (pest.alertIcon) {
    pest.alertIcon.setPosition(sprite.x, sprite.y - 28);
    pest.alertIcon.setDepth(sprite.y + 10);
  }

  if (isFrozen) {
    sprite.setVelocity(0, 0);
    return;
  }

  if (pest.kind === "beetle") {
    updateBeetle(pest);
  } else if (pest.kind === "bee") {
    updateBee(pest, playerX, playerY, now);
  } else if (pest.kind === "wasp") {
    updateWasp(pest, playerX, playerY);
  }

  sprite.setDepth(sprite.y);
}

function updateBeetle(pest: PestRef) {
  const { sprite, patrol, speed } = pest;
  if (patrol.length === 0) {
    sprite.setVelocity(0, 0);
    return;
  }

  const target = patrol[pest.index % patrol.length];
  const dx = target.x - sprite.x;
  const dy = target.y - sprite.y;
  const dist = Math.hypot(dx, dy);

  if (dist < 16 || jammedToward(sprite, dx, dy)) {
    pest.index = (pest.index + 1) % patrol.length;
    sprite.setVelocity(0, 0);
    return;
  }

  sprite.setVelocity((dx / dist) * speed, (dy / dist) * speed);
  sprite.setFlipX(dx < 0);
}

function updateBee(pest: PestRef, playerX: number, playerY: number, now: number) {
  const { sprite, patrol, speed, chaseSpeed, detectRadius, origin } = pest;
  const dxP = playerX - sprite.x;
  const dyP = playerY - sprite.y;
  const distSqP = dxP * dxP + dyP * dyP;
  const detectSq = detectRadius * detectRadius;

  if (pest.state === "patrol") {
    if (distSqP < detectSq) {
      // Trigger Alert
      pest.state = "alert";
      pest.stateTimer = now + 350;
      sprite.setVelocity(0, 0);
      sfxAlert();
      if (pest.alertIcon) {
        pest.alertIcon.setAlpha(1);
        sprite.scene.tweens.add({
          targets: pest.alertIcon,
          y: sprite.y - 34,
          yoyo: true,
          duration: 160,
        });
      }
      return;
    }

    // Normal patrol
    const target = patrol[pest.index % patrol.length];
    const dx = target.x - sprite.x;
    const dy = target.y - sprite.y;
    const dist = Math.hypot(dx, dy);

    if (dist < 16 || jammedToward(sprite, dx, dy)) {
      pest.index = (pest.index + 1) % patrol.length;
      sprite.setVelocity(0, 0);
      return;
    }

    sprite.setVelocity((dx / dist) * speed, (dy / dist) * speed);
    sprite.setFlipX(dx < 0);
  } else if (pest.state === "alert") {
    sprite.setVelocity(0, 0);
    if (now >= pest.stateTimer) {
      pest.state = "chase";
      pest.stateTimer = now + 2600;
      if (pest.alertIcon) pest.alertIcon.setAlpha(0);
    }
  } else if (pest.state === "chase") {
    const loseInterestSq = detectRadius * 2.2 * (detectRadius * 2.2);
    if (now >= pest.stateTimer || distSqP > loseInterestSq) {
      pest.state = "cooldown";
      pest.stateTimer = now + 2800;
      return;
    }

    const dist = Math.sqrt(distSqP) || 1;
    sprite.setVelocity((dxP / dist) * chaseSpeed, (dyP / dist) * chaseSpeed);
    sprite.setFlipX(dxP < 0);
  } else if (pest.state === "cooldown") {
    // Fly back toward origin
    const dxO = origin.x - sprite.x;
    const dyO = origin.y - sprite.y;
    const distO = Math.hypot(dxO, dyO);

    if (distO < 24 && now >= pest.stateTimer) {
      pest.state = "patrol";
      return;
    }

    if (distO >= 20) {
      sprite.setVelocity((dxO / distO) * speed, (dyO / distO) * speed);
      sprite.setFlipX(dxO < 0);
    } else {
      sprite.setVelocity(0, 0);
    }
  }
}

function updateWasp(pest: PestRef, playerX: number, playerY: number) {
  const { sprite, guardZone, chaseSpeed, speed, leashRadius } = pest;
  const dxP = playerX - sprite.x;
  const dyP = playerY - sprite.y;
  const distSqP = dxP * dxP + dyP * dyP;

  const dxHome = guardZone.x - sprite.x;
  const dyHome = guardZone.y - sprite.y;
  const distSqHome = dxHome * dxHome + dyHome * dyHome;

  if (pest.state === "guard") {
    if (distSqP < guardZone.radius * guardZone.radius) {
      pest.state = "aggro";
      return;
    }

    // Hover gently around guard point
    if (distSqHome > 30 * 30) {
      const dist = Math.sqrt(distSqHome);
      sprite.setVelocity((dxHome / dist) * speed * 0.7, (dyHome / dist) * speed * 0.7);
      sprite.setFlipX(dxHome < 0);
    } else {
      sprite.setVelocity(0, 0);
    }
  } else if (pest.state === "aggro") {
    // Check if lured beyond leash boundary
    if (distSqHome > leashRadius * leashRadius) {
      pest.state = "return";
      return;
    }

    const dist = Math.sqrt(distSqP) || 1;
    sprite.setVelocity((dxP / dist) * chaseSpeed, (dyP / dist) * chaseSpeed);
    sprite.setFlipX(dxP < 0);
  } else if (pest.state === "return") {
    const dist = Math.sqrt(distSqHome);
    if (dist < 20) {
      pest.state = "guard";
      sprite.setVelocity(0, 0);
      return;
    }

    sprite.setVelocity((dxHome / dist) * speed, (dyHome / dist) * speed);
    sprite.setFlipX(dxHome < 0);
  }
}
