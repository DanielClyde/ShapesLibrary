import { AreaShape } from '../AreaShape';
import { Point } from '../Point';

export class Ellipse extends AreaShape {
  protected radii: number[];
  constructor(center: Point, radiusA: number, radiusB: number) {
    super([center]);
    this.radii = [radiusA, radiusB];
    if (this.computeArea() === 0) {
      throw new Error(`${this.constructor.name} cannot have an area of 0!`);
    }
  }

  getRadii() {
    return this.radii;
  }

  computeArea(): number {
    return Math.PI * this.radii[0] * this.radii[1];
  }
}
