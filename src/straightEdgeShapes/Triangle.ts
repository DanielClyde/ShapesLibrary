import { StraightEdgeShape } from '../straightEdgeShapes/StraightEdgeShape';
import { Point } from '../Point';

export class Triangle extends StraightEdgeShape {
  constructor(bottomLeft: Point, protected width: number, protected height: number) {
    const bottomRight = bottomLeft.clone();
    bottomRight.move('x', width);
    const topCenter = bottomLeft.clone();
    topCenter.move('x', width / 2);
    topCenter.move('y', height);
    const points = [bottomLeft, bottomRight, topCenter];
    super(points);
    if (this.computeArea() === 0) {
      throw new Error(`${this.constructor.name} cannot have an area of 0!`);
    }
  }

  computeArea(): number {
    return (this.width * this.height) / 2;
  }
}
