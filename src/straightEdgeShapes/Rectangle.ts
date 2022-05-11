import { StraightEdgeShape } from '../straightEdgeShapes/StraightEdgeShape';
import { Point } from '../Point';

export class Rectangle extends StraightEdgeShape {
  constructor(topLeft: Point, protected width: number, protected height: number) {
    const topRight = new Point(topLeft.getX() + width, topLeft.getY());
    const bottomLeft = new Point(topLeft.getX(), topLeft.getY() + height);
    const bottomRight = new Point(topLeft.getX() + width, topLeft.getY() + height);
    super([topLeft, topRight, bottomRight, bottomLeft]);
    if (this.width === 0 || this.height === 0) {
      throw new Error(`${this.constructor.name} cannot have a 0 width or height!`);
    }
  }
}
