import { Circle, Point } from '../src/index';

describe('Circle Tests', () => {
  test('Should be able to instantiate', () => {
    const e = new Circle(new Point(0, 0), 3);
    expect(e).toBeInstanceOf(Circle);
  });

  test('Should be able to get attributes (points and radii)', () => {
    const e = new Circle(new Point(0, 0), 3);
    expect(e.getRadii()).toEqual([3, 3]);
    const [center] = e.getPoints();
    expect(center.getX()).toBe(0);
    expect(center.getY()).toBe(0);
  });

  test('Should fail to get a point that doesn\'t exist on the shape', () => {
    const e = new Circle(new Point(0, 0), 3);
    expect(() => e.getPoint(1)).toThrowError('Cannot get point 1 on Circle.');
  });

  test('Should be able to move', () => {
    const e = new Circle(new Point(0, 0), 3);
    expect(e.getRadii()).toEqual([3, 3]);
    let [center] = e.getPoints();
    expect(center.getX()).toBe(0);
    expect(center.getY()).toBe(0);
    e.move('x', 3);
    e.move('y', 3);
    [center] = e.getPoints();
    expect(center.getX()).toBe(3);
    expect(center.getY()).toBe(3);
  });

  test('Should be able to compute area', () => {
    const e = new Circle(new Point(0, 0), 1);
    expect(e.computeArea()).toBe(Math.PI);
  });

  test('Should not be able to create an Circle with an area of 0', () => {
    expect(() => new Circle(new Point(0, 0), 0)).toThrowError('Circle cannot have an area of 0!');
  });
});
