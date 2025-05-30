export default interface GameObject {
    readonly x: number;
    readonly y: number;
    draw: (ctx: CanvasRenderingContext2D) => void;
    update: () => void;
}
