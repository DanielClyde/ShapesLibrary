import { Triangle, Point } from '../src/index';

describe('Triangle Tests', () => {
  test('Should be able to instantiate', () => {
    const t = new Triangle(new Point(0, 0), 5, 5);
    expect(t).toBeInstanceOf(Triangle);
  });

  test('Should have correct width and height', () => {
    const t = new Triangle(new Point(0, 0), 5, 5);
    expect(t.getHeight()).toBe(5);
    expect(t.getWidth()).toBe(5);
  });

  test('Should place points correctly given bottomLeft point, width, and height', () => {
    const t = new Triangle(new Point(0, 0), 5, 5);
    const [a, b, c] = t.getPoints();
    expect(a.getX()).toBe(0);
    expect(a.getY()).toBe(0);
    expect(b.getX()).toBe(5);
    expect(b.getY()).toBe(0);
    expect(c.getX()).toBe(2.5);
    expect(c.getY()).toBe(5);
  });

  test('Should be able to move triangel and get new points', () => {
    const t = new Triangle(new Point(0, 0), 5, 5);
    let [a, b, c] = t.getPoints();
    expect(a.getX()).toBe(0);
    expect(a.getY()).toBe(0);
    expect(b.getX()).toBe(5);
    expect(b.getY()).toBe(0);
    expect(c.getX()).toBe(2.5);
    expect(c.getY()).toBe(5);
    t.move('x', 1);
    t.move('y', -1);
    [a, b, c] = t.getPoints();
    expect(a.getX()).toBe(1);
    expect(a.getY()).toBe(-1);
    expect(b.getX()).toBe(6);
    expect(b.getY()).toBe(-1);
    expect(c.getX()).toBe(3.5);
    expect(c.getY()).toBe(4);
  });

  test('Should have correct area', () => {
    const t = new Triangle(new Point(0, 0), 5, 5);
    expect(t.computeArea()).toBe(12.5);
  });

  test('Should not be able to create a triangle with area of 0', () => {
    expect(() => new Triangle(new Point(0, 0), 6, 0)).toThrowError('Triangle cannot have an area of 0!');
    expect(() => new Triangle(new Point(0, 0), 0, 6)).toThrowError('Triangle cannot have an area of 0!');
    expect(() => new Triangle(new Point(0, 0), 0, 0)).toThrowError('Triangle cannot have an area of 0!');
  });

  test('Should fail to get a point that doesn\'t exist on the shape', () => {
    const t = new Triangle(new Point(0, 0), 3, 5);
    expect(() => t.getPoint(3)).toThrowError('Cannot get point 3 on Triangle. Point index must be between 0 and 2');
  });
});
