// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const makeRectangle = (point, width, height) => cons(point, cons(width, height));

export const startPoint = rectangle => car(rectangle);
export const height = rectangle => cdr(cdr(rectangle));
export const width = rectangle => car(cdr(rectangle));

export const square = rectangle => height(rectangle) * width(rectangle);
export const perimeter = rectangle => 2 * (height(rectangle) + width(rectangle));

export const containsTheOrigin = (rectangle) => {
  const point1 = startPoint(rectangle);
  const point2 = makePoint(getX(point1) + width(rectangle), getY(point1) - height(rectangle));

  return quadrant(point1) === 2 && quadrant(point2) === 4;
};