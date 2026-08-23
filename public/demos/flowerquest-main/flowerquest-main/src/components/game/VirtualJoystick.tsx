import { useCallback, useEffect, useRef } from "react";
import { setJoystick } from "@/game/input";

const DEADZONE = 10;
const MAX_RADIUS = 54;

export function VirtualJoystick() {
  const origin = useRef<{ x: number; y: number } | null>(null);
  const pointerId = useRef<number | null>(null);

  const release = useCallback(() => {
    origin.current = null;
    pointerId.current = null;
    setJoystick(0, 0);
  }, []);

  useEffect(() => release, [release]);

  const updateFromPointer = useCallback((clientX: number, clientY: number) => {
    if (!origin.current) return;
    const dx = clientX - origin.current.x;
    const dy = clientY - origin.current.y;
    const dist = Math.hypot(dx, dy);

    if (dist < DEADZONE) {
      setJoystick(0, 0);
      return;
    }

    const clampedDist = Math.min(dist, MAX_RADIUS);
    const scale = clampedDist / MAX_RADIUS;
    const normX = (dx / dist) * scale;
    const normY = (dy / dist) * scale;

    setJoystick(normX, normY);
  }, []);

  return (
    <div
      className="absolute inset-0 z-10 select-none"
      style={{ touchAction: "none", WebkitUserSelect: "none" }}
      onPointerDown={(event) => {
        event.preventDefault();
        pointerId.current = event.pointerId;
        origin.current = { x: event.clientX, y: event.clientY };
        try {
          event.currentTarget.setPointerCapture(event.pointerId);
        } catch {
          // ignore
        }
      }}
      onPointerMove={(event) => {
        if (pointerId.current !== event.pointerId) return;
        updateFromPointer(event.clientX, event.clientY);
      }}
      onPointerUp={release}
      onPointerCancel={release}
    />
  );
}

