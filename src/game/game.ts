import Player from "./gameObjects/player";

export default class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private player: Player;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        console.log(this.canvas);
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        console.log(this.ctx)
        this.player = new Player(this.canvas.width / 2, this.canvas.height / 2);
    }

    private update() {
        this.player.update();
        this.player.isMovingRight = true;
    }

    private draw() {
        this.player.draw(this.ctx);
    }

    public run() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.draw();
        this.update();

        requestAnimationFrame(this.run);
    }
}
