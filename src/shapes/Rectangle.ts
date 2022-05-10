import { StraightEdgeShape } from '../StraightEdgeShape';
import { Point } from './Point';

export class Rectangle extends StraightEdgeShape {
  protected width: number;
  protected height: number;
  constructor(topLeft: Point, width: number, height: number) {
    const topRight = new Point(topLeft.getX() + width, topLeft.getY());
    const bottomLeft = new Point(topLeft.getX(), topLeft.getY() - height);
    const bottomRight = new Point(topLeft.getX() + width, topLeft.getY() - height);
    super([topLeft, topRight, bottomRight, bottomLeft]);
    this.width = width;
    this.height = height;
  }
}
