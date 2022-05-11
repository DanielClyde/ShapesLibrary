import { Line, Point } from '../src/index';

describe('Line tests', () => {
  test('Should instantiate', () => {
    const line = new Line(new Point(0, 0), new Point(3, 4));
    expect(line).toBeInstanceOf(Line);
  });

  test('Should be able to get length', () => {
    const line = new Line(new Point(0, 0), new Point(3, 4));
    expect(line.getLength()).toBe(5);
  });

  test('Should be able to get length (2)', () => {
    const line = new Line(new Point(0, 0), new Point(5, 5));
    expect(line.getLength()).toBe(Math.sqrt(50));
  });

  test('Should be able to get slope', () => {
    const line = new Line(new Point(0, 0), new Point(3, 4));
    expect(line.getSlope()).toBe(4 / 3);
  });

  test('Should be able to get slope (2)', () => {
    const line = new Line(new Point(0, 0), new Point(5, 5));
    expect(line.getSlope()).toBe(1);
  });

  test('Should not be able to construct a Line with a length of 0', () => {
    expect(() => new Line(new Point(0, 0), new Point(0, 0))).toThrowError('Line cannot have a length of 0!');
  });
});
