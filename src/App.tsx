import { useEffect, useRef, useState } from 'react'
import { EventType, ScoreEvent } from './game/events';
import './App.css'
import Game from './game/game';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // listen for events
    window.addEventListener(EventType.SCORE, (ev: Event) => {
      setScore((ev as ScoreEvent).detail.score)
    });

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
        <h3>score: {score}</h3>
      </div>
    </div>
  )
}

export default App
