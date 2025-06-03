import Player from "./gameObjects/player";

export default class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private player: Player;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.player = new Player(this.canvas.width / 2, this.canvas.height / 2);
        this.createEventListeners();
    }

    private createEventListeners() {
        window.addEventListener("keydown", (ev: KeyboardEvent) => {
            if(ev.key === "w") this.player.isMovingUp = true;
            if(ev.key === "a") this.player.isMovingLeft = true;
            if(ev.key === "s") this.player.isMovingDown = true;
            if(ev.key === "d") this.player.isMovingRight = true;
        });

        window.addEventListener("keyup", (ev: KeyboardEvent) => {
            if(ev.key === "w") this.player.isMovingUp = false;
            if(ev.key === "a") this.player.isMovingLeft = false;
            if(ev.key === "s") this.player.isMovingDown = false;
            if(ev.key === "d") this.player.isMovingRight = false;
        });
    }

    private update() {
        this.player.update();
    }

    private draw() {
        this.player.draw(this.ctx);
    }

    public run() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.draw();
        this.update();

        requestAnimationFrame(this.run.bind(this));
    }
}
