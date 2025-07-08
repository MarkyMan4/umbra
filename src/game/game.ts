import { ScoreEvent } from "./events";
import Player from "./gameObjects/player";
import Bullet from "./gameObjects/bullet";
import Vector2 from "./utils/vector";

export default class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private player: Player;
    private playerBullets: Bullet[];
    private score: number;

    private playerIsFiringUp: boolean;
    private playerIsFiringRight: boolean;
    private playerIsFiringDown: boolean;
    private playerIsFiringLeft: boolean;
    private playerLastShotFired: Date;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.player = new Player(this.canvas.width / 2, this.canvas.height / 2);
        this.playerBullets = [];
        this.score = 0;
        this.playerIsFiringUp = false;
        this.playerIsFiringRight = false;
        this.playerIsFiringLeft = false;
        this.playerIsFiringDown = false;
        this.playerLastShotFired = new Date();

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
            if(ev.key === "ArrowUp") this.playerIsFiringUp = true;
            if(ev.key === "ArrowLeft") this.playerIsFiringLeft = true;
            if(ev.key === "ArrowDown") this.playerIsFiringDown = true;
            if(ev.key === "ArrowRight") this.playerIsFiringRight = true;
        });

        window.addEventListener("keyup", (ev: KeyboardEvent) => {
            // movement
            if(ev.key === "w") this.player.isMovingUp = false;
            if(ev.key === "a") this.player.isMovingLeft = false;
            if(ev.key === "s") this.player.isMovingDown = false;
            if(ev.key === "d") this.player.isMovingRight = false;

            // shooting
            if(ev.key === "ArrowUp") this.playerIsFiringUp = false;
            if(ev.key === "ArrowLeft") this.playerIsFiringLeft = false;
            if(ev.key === "ArrowDown") this.playerIsFiringDown = false;
            if(ev.key === "ArrowRight") this.playerIsFiringRight = false;
        });

    }

    private getFiringVector(): Vector2 {
        return new Vector2(
            (this.playerIsFiringLeft ? -1 : 0) + (this.playerIsFiringRight ? 1 : 0),
            (this.playerIsFiringUp ? -1 : 0) + (this.playerIsFiringDown ? 1 : 0),
        );
    }

    private update() {
        this.player.update();

        let firingVec = this.getFiringVector();
        if(firingVec.x !== 0 || firingVec.y !== 0) {
            this.playerBullets.push(new Bullet(this.player.x, this.player.y, firingVec));
        }

        this.playerBullets.forEach(b => b.update());
    }

    private draw() {
        // draw border
        this.ctx.beginPath();
        this.ctx.roundRect(5, 5, this.canvas.width - 10, this.canvas.height - 10, 10);
        this.ctx.strokeStyle = "MediumSeaGreen";
        this.ctx.stroke();

        this.player.draw(this.ctx);

        this.playerBullets.forEach(b => b.draw(this.ctx));
    }

    public run() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.draw();
        this.update();

        window.setTimeout(() => requestAnimationFrame(this.run.bind(this)), 1000 / 60);
    }
}
