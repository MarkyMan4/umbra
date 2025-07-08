import Vector2 from "../utils/vector";
import IGameObject from "./objects";

export default class Bullet implements IGameObject {
    private static RADIUS: number = 5;
    private static SPEED: number = 10;

    public x: number;
    public y: number;
    private direction: Vector2;

    constructor(x: number, y: number, direction: Vector2) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    public update() {
        this.x += this.direction.x * Bullet.SPEED;
        this.y += this.direction.y * Bullet.SPEED;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Bullet.RADIUS, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
    }
}
