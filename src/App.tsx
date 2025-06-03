import { useState, useEffect, useRef } from 'react'
import './App.css'
import Game from './game/game';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const canvas = canvasRef.current;
    if(canvas === null) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const game = new Game(canvas);
    game.run();
  }, []);

  return (
    <div>
      <canvas id="canvas" ref={canvasRef}></canvas>
      <div id="game-ui">
        <h1>pre-alpha</h1>
      </div>
    </div>
  )
}

export default App
