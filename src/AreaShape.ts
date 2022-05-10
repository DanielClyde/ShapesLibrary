import { MovableShape } from './Movable';

export abstract class AreaShape extends MovableShape {
  abstract computeArea(): number;
}
