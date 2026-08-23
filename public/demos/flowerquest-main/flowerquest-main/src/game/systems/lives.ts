import { getGameState, patchGameState } from "../state";

export function currentHearts(): number {
  return getGameState().hearts;
}

export function loseHeart(): { hearts: number; dead: boolean } {
  const hearts = Math.max(0, getGameState().hearts - 1);
  patchGameState({ hearts });
  return { hearts, dead: hearts <= 0 };
}

export function gainHeart(): { hearts: number; healed: boolean } {
  const state = getGameState();
  if (state.hearts < state.heartsMax) {
    const hearts = state.hearts + 1;
    patchGameState({ hearts });
    return { hearts, healed: true };
  }
  return { hearts: state.hearts, healed: false };
}

export function resetHearts(max: number) {
  patchGameState({ hearts: max, heartsMax: max });
}

