import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "DodgerBlue";
    ctx.fill();
  }, []);

  return (
    <div>
      <canvas id="canvas"></canvas>
    </div>
  )
}

export default App
