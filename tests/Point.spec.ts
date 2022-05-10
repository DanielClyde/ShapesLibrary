import { Point } from '../src/shapes/Point';

describe('Point', () => {
  test('Should initialize', () => {
    const point = new Point(10, 5);
    expect(point).toBeInstanceOf(Point);
  });
});
