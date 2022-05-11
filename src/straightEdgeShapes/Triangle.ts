import { StraightEdgeShape } from '../straightEdgeShapes/StraightEdgeShape';
import { Point } from '../Point';

export class Triangle extends StraightEdgeShape {
  private baseMidPoint: Point;

  protected get width() { return this.getPoint(0).getDistanceFrom(this.getPoint(1)); }
  protected get height() { return this.baseMidPoint.getDistanceFrom(this.getPoint(2)); }

  constructor(points: [Point, Point, Point]) {
    super(points);
    this.baseMidPoint = new Point(this.getPoint(0).getX() + (this.width / 2), this.getPoint(0).getY());
    if (this.computeArea() === 0) {
      throw new Error(`${this.constructor.name} cannot have an area of 0!`);
    }
  }

  computeArea(): number {
    return (this.width * this.height) / 2;
  }
}
