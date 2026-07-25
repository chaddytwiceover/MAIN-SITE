"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';

// Constants
const GRAVITY = 0.6;
const FLAP_POWER = -10;
const PIPE_WIDTH = 60;
const PIPE_GAP = 150;
const PIPE_SPEED = 3;
const BIRD_SIZE = 34;

export type PipeData = {
  id: number;
  x: number;
  topHeight: number;
  passed: boolean;
};

export default function FlappyBird() {
  // State variables replicating the SwiftUI @State
  const [birdPosition, setBirdPosition] = useState(300);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [pipes, setPipes] = useState<PipeData[]>([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);

  const containerHeight = 600;
  const containerWidth = 448; // max-w-md is 448px typically

  const spawnPipe = useCallback(() => {
    const minPipeHeight = 50;
    const maxPipeHeight = containerHeight - PIPE_GAP - minPipeHeight;
    const topHeight = Math.floor(Math.random() * (maxPipeHeight - minPipeHeight + 1)) + minPipeHeight;

    return {
      id: Date.now(),
      x: containerWidth,
      topHeight,
      passed: false,
    };
  }, []);

  const resetGame = () => {
    setBirdPosition(300);
    setBirdVelocity(0);
    setPipes([]);
    setScore(0);
    setIsGameOver(false);
    setGameStarted(false);
  };

  const flap = () => {
    if (isGameOver) return;
    if (!gameStarted) {
      setGameStarted(true);
      setPipes([spawnPipe()]);
    }
    setBirdVelocity(FLAP_POWER);
  };

  const updateGame = useCallback(() => {
    if (isGameOver || !gameStarted) return;

    setBirdPosition((prevPos) => {
      const newPos = prevPos + birdVelocity;
      // Floor collision
      if (newPos >= containerHeight - BIRD_SIZE) {
        setIsGameOver(true);
        return containerHeight - BIRD_SIZE;
      }
      // Ceiling collision
      if (newPos <= 0) {
        setIsGameOver(true);
        return 0;
      }
      return newPos;
    });

    setBirdVelocity((prevVel) => prevVel + GRAVITY);

    setPipes((prevPipes) => {
      let newPipes = prevPipes
        .map((pipe) => ({ ...pipe, x: pipe.x - PIPE_SPEED }))
        .filter((pipe) => pipe.x + PIPE_WIDTH > 0);

      // Spawn new pipe every 100 frames roughly, or check distance
      if (newPipes.length > 0) {
        const lastPipe = newPipes[newPipes.length - 1];
        if (containerWidth - lastPipe.x >= 200) {
          // Time to spawn a new pipe
          newPipes.push(spawnPipe());
        }
      }

      let newlyPassedCount = 0;

      // Check for scoring
      newPipes = newPipes.map((pipe) => {
        // bird is approx at x = 50
        const birdX = 50;
        if (!pipe.passed && pipe.x + PIPE_WIDTH < birdX) {
          newlyPassedCount++;
          return { ...pipe, passed: true };
        }
        return pipe;
      });

      // Update score if pipes were passed this frame
      if (newlyPassedCount > 0) {
        setScore((s) => s + newlyPassedCount);
      }

      return newPipes;
    });

  }, [birdVelocity, gameStarted, isGameOver, spawnPipe]);

  // Collision detection
  useEffect(() => {
    if (isGameOver || !gameStarted) return;
    const birdX = 50;
    const birdY = birdPosition;

    // Simple AABB collision detection
    for (const pipe of pipes) {
      const pipeLeft = pipe.x;
      const pipeRight = pipe.x + PIPE_WIDTH;

      const birdLeft = birdX;
      const birdRight = birdX + BIRD_SIZE;
      const birdTop = birdY;
      const birdBottom = birdY + BIRD_SIZE;

      if (birdRight > pipeLeft && birdLeft < pipeRight) {
        // Checking top pipe
        if (birdTop < pipe.topHeight) {
          setIsGameOver(true);
        }
        // Checking bottom pipe
        if (birdBottom > pipe.topHeight + PIPE_GAP) {
          setIsGameOver(true);
        }
      }
    }
  }, [birdPosition, pipes, isGameOver, gameStarted]);

  useEffect(() => {
    const loop = () => {
      updateGame();
      requestRef.current = requestAnimationFrame(loop);
    };

    if (gameStarted && !isGameOver) {
      requestRef.current = requestAnimationFrame(loop);
    }

    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [updateGame, gameStarted, isGameOver]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md h-[600px] mx-auto bg-sky-300 overflow-hidden rounded-lg shadow-lg select-none cursor-pointer"
      onClick={flap}
    >
      {/* Pipes */}
      {pipes.map((pipe) => (
        <React.Fragment key={pipe.id}>
          {/* Top Pipe */}
          <div
            className="absolute bg-green-500 border-2 border-green-700"
            style={{
              left: `${pipe.x}px`,
              top: 0,
              width: `${PIPE_WIDTH}px`,
              height: `${pipe.topHeight}px`,
            }}
          />
          {/* Bottom Pipe */}
          <div
            className="absolute bg-green-500 border-2 border-green-700"
            style={{
              left: `${pipe.x}px`,
              top: `${pipe.topHeight + PIPE_GAP}px`,
              width: `${PIPE_WIDTH}px`,
              height: `${containerHeight - pipe.topHeight - PIPE_GAP}px`,
            }}
          />
        </React.Fragment>
      ))}

      {/* Bird */}
      <div
        className="absolute bg-yellow-400 rounded-full border-2 border-yellow-600 flex items-center justify-center"
        style={{
          left: '50px',
          top: `${birdPosition}px`,
          width: `${BIRD_SIZE}px`,
          height: `${BIRD_SIZE}px`,
          transform: `rotate(${Math.min(Math.max(birdVelocity * 3, -90), 90)}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Eye */}
        <div className="absolute right-2 top-2 w-2 h-2 bg-white rounded-full">
          <div className="absolute right-0.5 top-0.5 w-1 h-1 bg-black rounded-full" />
        </div>
        {/* Beak */}
        <div className="absolute -right-2 top-4 w-4 h-3 bg-orange-500 rounded-full" />
      </div>

      {/* Score */}
      <div className="absolute top-10 w-full text-center pointer-events-none z-10">
        <span className="text-6xl font-bold text-white drop-shadow-md" style={{ WebkitTextStroke: '2px black' }}>
          {score}
        </span>
      </div>

      {/* Game Over / Start Overlay */}
      {(!gameStarted || isGameOver) && (
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-20">
          {!gameStarted && !isGameOver ? (
            <div className="text-white text-2xl font-bold mb-4 animate-bounce drop-shadow-md">
              Tap to Start
            </div>
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center text-center">
              <h2 className="text-4xl font-bold text-red-500 mb-2">Game Over</h2>
              <p className="text-2xl font-semibold mb-6">Score: {score}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  resetGame();
                }}
                className="px-6 py-3 bg-blue-500 text-white text-xl font-bold rounded-full hover:bg-blue-600 transition-colors shadow-md active:scale-95"
              >
                Restart
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
