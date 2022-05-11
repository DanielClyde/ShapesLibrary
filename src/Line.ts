import { MovableShape } from './Movable';
import { Point } from './Point';

export class Line extends MovableShape {
  constructor(pointA: Point, pointB: Point) {
    super([pointA, pointB]);
    if (this.getLength() === 0) {
      throw new Error('A Line cannot have 0 length!');
    }
  }

  getLength(): number {
    return this.getPoint(0).getDistanceFrom(this.getPoint(1));
  }

  getSlope(): number {
    const rise = this.getPoint(1).getY() - this.getPoint(0).getY();
    const run = this.getPoint(1).getX() - this.getPoint(0).getX();
    return rise / run;
  }
}
