import { Axis } from './Axis';
import { Point } from './shapes/Point';

export interface Movable {
  move: (axis: Axis, distance: number) => void;
}

export abstract class MovableShape implements Movable {
  private points: Point[] = [];

  constructor(points: Point[]) {
    this.points = points;
  }

  getPoint(index: number): Point {
    if (index >= this.points.length) {
      throw new Error(`Cannot get point ${index} on ${this.constructor.name}. Point index must be between 0 and ${this.points.length - 1}`);
    } else {
      return this.points[index];
    }
  };

  move(axis: Axis, distance: number) {
    this.points.forEach((p) => {
      p.move(axis, distance);
    });
  }
}
