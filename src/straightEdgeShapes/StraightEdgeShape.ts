import { AreaShape } from '../AreaShape';

export abstract class StraightEdgeShape extends AreaShape {
  protected abstract width: number;
  protected abstract height: number;

  getWidth() { return this.width; }
  getHeight() { return this.height; }
  computeArea(): number {
    return this.width * this.height;
  }
}
