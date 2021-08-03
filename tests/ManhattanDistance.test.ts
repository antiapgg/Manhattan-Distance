import { manhattanDistance } from '../src/ManhattanDistance';
import { Point } from '../src/Point';

describe('Manhattan Distance', (): void => {
    it('should return 0 when the points have the same coordenates', (): void => {
        expect(manhattanDistance(new Point(0, 0), new Point(0, 0))).toBe(0);
    });

    it('should return the distance between the two points', (): void => {
        expect(manhattanDistance(new Point(1, 2), new Point(4, 2))).toBe(3);
        expect(manhattanDistance(new Point(27, 42), new Point(31, 12))).toBe(34);
        expect(manhattanDistance(new Point(100, 0), new Point(0, 100))).toBe(200);
    });
});
