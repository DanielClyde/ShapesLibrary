import { Line, Point } from '../src/index';

describe('Line tests', () => {
  test('Should instantiate', () => {
    const line = new Line(new Point(0, 0), new Point(3, 4));
    expect(line).toBeInstanceOf(Line);
  });
});
