import { Axis } from './Axis';
import { Movable } from './Movable';

export class Point implements Movable {
  constructor(private x: number, private y: number) { }

  getX(): number { return this.x; }
  getY(): number { return this.y; }

  move(axis: Axis, distance: number): void {
    if (axis === 'x') {
      this.x += distance;
    } else {
      this.y += distance;
    }
  }

  getDistanceFrom(other: Point): number {
    return Math.sqrt(
      Math.pow(this.x - other.getX(), 2) +
      Math.pow(this.y - other.getY(), 2)
    );
  }

  clone(): Point {
    return new Point(this.x, this.y);
  }
}
