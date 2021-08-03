export class Point {
    constructor(private readonly x: number, private readonly y: number) {}

    distance(point: Point): number {
        return Math.abs(point.x - this.x) + Math.abs(point.y - this.y);
    }
}
