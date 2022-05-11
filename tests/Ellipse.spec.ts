import { Ellipse, Point } from '../src/index';

describe('Ellipse Tests', () => {
  test('Should be able to instantiate', () => {
    const e = new Ellipse(new Point(0, 0), 3, 5);
    expect(e).toBeInstanceOf(Ellipse);
  });

  test('Should be able to get attributes (points and radii)', () => {
    const e = new Ellipse(new Point(0, 0), 3, 5);
    expect(e.getRadii()).toEqual([3, 5]);
    const [center] = e.getPoints();
    expect(center.getX()).toBe(0);
    expect(center.getY()).toBe(0);
  });

  test('Should fail to get a point that doesn\'t exist on the shape', () => {
    const e = new Ellipse(new Point(0, 0), 3, 5);
    expect(() => e.getPoint(1)).toThrowError('Cannot get point 1 on Ellipse.');
  });

  test('Should be able to move', () => {
    const e = new Ellipse(new Point(0, 0), 3, 5);
    expect(e.getRadii()).toEqual([3, 5]);
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
    const e = new Ellipse(new Point(0, 0), 1, 2);
    expect(e.computeArea()).toBe(2 * Math.PI);
  });

  test('Should not be able to create an Ellipse with an area of 0', () => {
    expect(() => new Ellipse(new Point(0, 0), 0, 1)).toThrowError('Ellipse cannot have an area of 0!');
    expect(() => new Ellipse(new Point(0, 0), 1, 0)).toThrowError('Ellipse cannot have an area of 0!');
    expect(() => new Ellipse(new Point(0, 0), 0, 0)).toThrowError('Ellipse cannot have an area of 0!');
  });
});
