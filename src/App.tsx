import { useState, useEffect } from 'react'
import './App.css'
import Game from './game/game';

function App() {
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const game = new Game(canvas);
    game.run();
  }, []);

  return (
    <div>
      <canvas id="canvas"></canvas>
      <div id="game-ui">
        <h1>umbra</h1>
      </div>
    </div>
  )
}

export default App
