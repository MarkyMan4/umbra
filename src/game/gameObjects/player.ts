import IGameObject from "./objects";
import Vector2 from "../utils/vector";

export default class Player implements IGameObject {
    private static MOVE_SPEED: number = 5;
    private static RADIUS: number = 30;

    public x: number;
    public y: number;

    public isMovingUp: boolean;
    public isMovingRight: boolean;
    public isMovingDown: boolean;
    public isMovingLeft: boolean;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.isMovingUp = false;
        this.isMovingRight = false;
        this.isMovingDown = false;
        this.isMovingLeft = false;
    }

    private calculateVelocity(): Vector2 {
        let xVel = (this.isMovingLeft ? -Player.MOVE_SPEED : 0) + (this.isMovingRight ? Player.MOVE_SPEED : 0);
        let yVel = (this.isMovingUp ? -Player.MOVE_SPEED : 0) + (this.isMovingDown ? Player.MOVE_SPEED : 0);

        return new Vector2(xVel, yVel);
    }

    public update() {
        let velocity = this.calculateVelocity();
        this.x += velocity.x;
        this.y += velocity.y;
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Player.RADIUS, 0, 2 * Math.PI);
        ctx.strokeStyle = "MediumSeaGreen";
        ctx.stroke();
    }
}
