import { Axis } from '../Axis';
import { Movable } from '../Movable';

export class Point implements Movable {
  private x: number;
  private y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

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
}
