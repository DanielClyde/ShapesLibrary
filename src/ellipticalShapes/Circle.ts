import { Point } from '../Point';
import { Ellipse } from './Ellipse';

export class Circle extends Ellipse {
  constructor(center: Point, radius: number) {
    super(center, radius, radius);
  }
}
