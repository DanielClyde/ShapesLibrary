import { Square, Point } from '../src/index';

describe('Square tests', () => {
  test('Should be able to instantiate', () => {
    const rect = new Square(new Point(0, 0), 5);
    expect(rect).toBeInstanceOf(Square);
  });

  test('Should be able to get width and height', () => {
    const rect = new Square(new Point(0, 0), 5);
    expect(rect.getWidth()).toBe(5);
    expect(rect.getHeight()).toBe(5);
  });

  test('Should be able to move a rectangle', () => {
    const rect = new Square(new Point(0, 0), 5);
    rect.move('x', 2);
    expect(rect.getPoint(0).getX()).toBe(2);
    expect(rect.getPoint(0).getY()).toBe(0);
    rect.move('y', 1);
    expect(rect.getPoint(0).getX()).toBe(2);
    expect(rect.getPoint(0).getY()).toBe(1);
    rect.move('y', -2);
    expect(rect.getPoint(0).getX()).toBe(2);
    expect(rect.getPoint(0).getY()).toBe(-1);
  });

  test('Should be able to get all points', () => {
    const rect = new Square(new Point(0, 0), 5);
    let [a, b, c, d] = rect.getPoints();
    expect(a.getX()).toBe(0);
    expect(a.getY()).toBe(0);

    expect(b.getX()).toBe(5);
    expect(b.getY()).toBe(0);

    expect(c.getX()).toBe(5);
    expect(c.getY()).toBe(5);

    expect(d.getX()).toBe(0);
    expect(d.getY()).toBe(5);

    rect.move('x', 2);
    rect.move('y', 2);
    [a, b, c, d] = rect.getPoints();
    expect(a.getX()).toBe(2);
    expect(a.getY()).toBe(2);

    expect(b.getX()).toBe(7);
    expect(b.getY()).toBe(2);

    expect(c.getX()).toBe(7);
    expect(c.getY()).toBe(7);

    expect(d.getX()).toBe(2);
    expect(d.getY()).toBe(7);
  });

  test('Should be able to get area', () => {
    const rect = new Square(new Point(0, 0), 5);
    expect(rect.computeArea()).toBe(25);
  });

  test('Should not be able to create a square with a width or height of 0', () => {
    expect(() => new Square(new Point(0, 0), 0)).toThrowError('Square cannot have a 0 width or height!');
  });

  test('Should fail to get a point that doesn\'t exist on the shape', () => {
    const sqr = new Square(new Point(0, 0), 5);
    expect(() => sqr.getPoint(4)).toThrowError('Cannot get point 4 on Square. Point index must be between 0 and 3');
  });
});
