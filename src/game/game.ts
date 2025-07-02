import { ScoreEvent } from "./events";
import Player from "./gameObjects/player";

export default class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private player: Player;
    private score: number;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.player = new Player(this.canvas.width / 2, this.canvas.height / 2);
        this.score = 0;

        this.createEventListeners();
    }

    private createEventListeners() {
        window.addEventListener("keydown", (ev: KeyboardEvent) => {
            // movement
            if(ev.key === "w") this.player.isMovingUp = true;
            if(ev.key === "a") this.player.isMovingLeft = true;
            if(ev.key === "s") this.player.isMovingDown = true;
            if(ev.key === "d") this.player.isMovingRight = true;

            // shooting
            if(ev.key === "ArrowUp") this.player.isFiringUp = true;
            if(ev.key === "ArrowLeft") this.player.isFiringLeft = true;
            if(ev.key === "ArrowDown") this.player.isFiringDown = true;
            if(ev.key === "ArrowRight") this.player.isFiringRight = true;
        });

        window.addEventListener("keyup", (ev: KeyboardEvent) => {
            // movement
            if(ev.key === "w") this.player.isMovingUp = false;
            if(ev.key === "a") this.player.isMovingLeft = false;
            if(ev.key === "s") this.player.isMovingDown = false;
            if(ev.key === "d") this.player.isMovingRight = false;

            // shooting
            if(ev.key === "ArrowUp") this.player.isFiringUp = false;
            if(ev.key === "ArrowLeft") this.player.isFiringLeft = false;
            if(ev.key === "ArrowDown") this.player.isFiringDown = false;
            if(ev.key === "ArrowRight") this.player.isFiringRight = false;
        });

    }

    private update() {
        this.player.update();
    }

    private draw() {
        // draw border
        this.ctx.beginPath();
        this.ctx.roundRect(5, 5, this.canvas.width - 10, this.canvas.height - 10, 10);
        this.ctx.strokeStyle = "MediumSeaGreen";
        this.ctx.stroke();

        this.player.draw(this.ctx);
    }

    public run() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.draw();
        this.update();

        window.setTimeout(() => requestAnimationFrame(this.run.bind(this)), 1000 / 60);
    }
}
