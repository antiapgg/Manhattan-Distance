import { Point } from './Point';

export function manhattanDistance(point1: Point, point2: Point): number {
    return point1.distance(point2);
}
