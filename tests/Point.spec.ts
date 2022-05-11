import { Point } from '../src/index';

describe('Point', () => {
  test('Should initialize', () => {
    const point = new Point(10, 5);
    expect(point).toBeInstanceOf(Point);
  });

  test('Should be able to get X and Y coordinates', () => {
    const point = new Point(10, 5);
    expect(point.getX()).toBe(10);
    expect(point.getY()).toBe(5);
  });

  test('should be able to calculate distance from another point', () => {
    const point = new Point(0, 0);
    const distance = point.getDistanceFrom(new Point(3, 4));
    expect(distance).toBe(5);
  });

  test('Should be able to move a point in the x direction', () => {
    const point = new Point(0, 0);
    point.move('x', 4.5);
    expect(point.getX()).toBe(4.5);
    expect(point.getY()).toBe(0);
  });

  test('Should be able to move a point in the y direction', () => {
    const point = new Point(0, 0);
    point.move('y', 4.5);
    expect(point.getY()).toBe(4.5);
    expect(point.getX()).toBe(0);
  });

  test('Should be able to move a point in both x and y directions', () => {
    const point = new Point(0, 0);
    point.move('y', 3);
    point.move('x', 100);
    expect(point.getX()).toBe(100);
    expect(point.getY()).toBe(3);
  });
});
