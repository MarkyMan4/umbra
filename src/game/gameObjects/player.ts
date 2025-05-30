import GameObject from "./objects";
import Vector2 from "../utils/vector";

export default class Player implements GameObject {
    // @ts-ignore
    private static MOVE_SPEED: number = 5;
    private static RADIUS: number = 30;

    public x: number;
    public y: number;
    private velocity: Vector2;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.velocity = new Vector2(0, 0);
    }

    public setVelocity(vel: Vector2) {
        this.velocity = vel;
    }

    public update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Player.RADIUS, 0, 2 * Math.PI);
        ctx.strokeStyle = "MediumSeaGreen";
        ctx.stroke();
    }
}
