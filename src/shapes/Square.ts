import { Point } from './Point';
import { Rectangle } from './Rectangle';

export class Square extends Rectangle {
  constructor(topLeft: Point, sideLength: number) {
    super(topLeft, sideLength, sideLength);
  }
}
