import { useEffect, useState } from "react";
import { Pause, Sparkles, Snowflake, Heart } from "lucide-react";
import { useGameState } from "./useGameState";
import { VirtualJoystick } from "./VirtualJoystick";
import { MuteButton } from "./MuteButton";

type Props = {
  onPause: () => void;
};

export function HudOverlay({ onPause }: Props) {
  const {
    hearts,
    heartsMax,
    levelNumber,
    levelName,
    phase,
    banner,
    gateUnlocked,
    objectives,
    activePowerUp,
  } = useGameState();

  const [remainingMs, setRemainingMs] = useState<number>(0);

  useEffect(() => {
    if (!activePowerUp) {
      setRemainingMs(0);
      return;
    }
    setRemainingMs(Math.max(0, activePowerUp.expiresAt - performance.now()));
    const interval = setInterval(() => {
      const ms = Math.max(0, activePowerUp.expiresAt - performance.now());
      setRemainingMs(ms);
    }, 100);
    return () => clearInterval(interval);
  }, [activePowerUp]);

  const required = objectives.reduce((sum, obj) => sum + obj.required, 0);
  const collected = objectives.reduce((sum, obj) => sum + obj.collected, 0);

  const remainingSec = (remainingMs / 1000).toFixed(1);
  const buffProgress = activePowerUp
    ? Math.max(0, Math.min(1, remainingMs / activePowerUp.durationMs))
    : 0;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden font-sans">
      {/* Invisible Full-screen Touch Controller */}
      {phase === "playing" && (
        <div className="pointer-events-auto absolute inset-0">
          <VirtualJoystick />
        </div>
      )}

      {/* Top Floating Glass Status Bar */}
      <div className="relative z-20 flex items-center justify-between gap-2 px-3 pt-3 sm:px-4 sm:pt-4">
        {/* Left Pill: Level + Collect Progress */}
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 shadow-lg backdrop-blur-md">
          <span className="font-display text-[11px] font-bold uppercase tracking-wider text-gold">
            Lv.{levelNumber}
          </span>
          <span className="h-3 w-px bg-white/20" />
          <div className="flex items-center gap-1.5 text-xs font-bold text-cream">
            {objectives.length <= 1 ? (
              <span>
                🌸 {collected}/{required || 0}
              </span>
            ) : (
              <div className="flex items-center gap-1.5">
                {objectives.map((obj) => (
                  <div key={obj.collectible} className="flex items-center gap-0.5">
                    <img
                      src={`/game/sprites/${obj.icon}.png`}
                      alt=""
                      className="h-3.5 w-3.5 object-contain"
                    />
                    <span className={obj.collected >= obj.required ? "text-gold" : "text-cream/80"}>
                      {obj.collected}/{obj.required}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center Pill: Hearts */}
        <div className="flex items-center gap-1 rounded-full border border-white/15 bg-black/40 px-2.5 py-1.5 shadow-lg backdrop-blur-md">
          {Array.from({ length: heartsMax }).map((_, i) => (
            <img
              key={i}
              src="/game/sprites/heart.png"
              alt=""
              className={`h-4.5 w-4.5 object-contain drop-shadow transition-all duration-200 ${
                i < hearts
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-20 grayscale"
              } ${hearts === 1 && i === 0 ? "animate-pulse" : ""}`}
            />
          ))}
        </div>

        {/* Right Controls: Audio + Pause */}
        <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-1.5 py-1 shadow-lg backdrop-blur-md">
          <MuteButton className="h-8 w-8 bg-transparent text-cream" />
          <button
            type="button"
            onClick={onPause}
            className="pointer-events-auto grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-black/25 text-cream transition-transform active:scale-90 hover:bg-black/60"
            aria-label="Pause"
          >
            <Pause className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Floating Active Power-Up Meter */}
      {activePowerUp && (
        <div className="relative z-20 mt-2 flex justify-center">
          <div className="flex min-w-56 items-center gap-2 rounded-full border border-gold/40 bg-black/60 px-3.5 py-1 shadow-xl backdrop-blur-md animate-fade-in">
            {activePowerUp.kind === "swift" && (
              <Sparkles className="h-4 w-4 text-gold animate-spin" />
            )}
            {activePowerUp.kind === "frost" && (
              <Snowflake className="h-4 w-4 text-cyan-300 animate-pulse" />
            )}
            {activePowerUp.kind === "heart" && (
              <Heart className="h-4 w-4 text-emerald-400" />
            )}
            <span className="font-display text-[11px] font-extrabold uppercase tracking-wider text-cream">
              {activePowerUp.label}
            </span>
            <span className="font-mono text-xs font-bold text-gold">
              {remainingSec}s
            </span>
            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-gold transition-[width] duration-100"
                style={{ width: `${Math.round(buffProgress * 100)}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Gate Unlocked Notification Pill */}
      {gateUnlocked && (
        <div className="relative z-20 mt-2 flex justify-center">
          <div className="rounded-full border border-leaf/60 bg-leaf/80 px-4 py-1 font-display text-[11px] font-extrabold uppercase tracking-widest text-cream shadow-lg backdrop-blur-sm animate-bounce">
            Gate Open →
          </div>
        </div>
      )}

      {/* Floating Alert / Hint Banner */}
      {banner && (
        <div className="relative z-20 mt-3 flex justify-center px-4">
          <p className="rounded-full border border-white/20 bg-cream/95 px-4 py-1.5 text-center text-xs font-black text-ink shadow-lg backdrop-blur-sm">
            {banner}
          </p>
        </div>
      )}
    </div>
  );
}
