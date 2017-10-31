 // eslint-disable-next-line
import { makePoint, getX, getY, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr } from 'hexlet-pairs';
// BEGIN (write your solution here)
import * as points from 'hexlet-points';

export const makeSegment = (point1, point2) => cons(point1, point2);
export const startSegment = segment => car(segment);
export const endSegment = segment => cdr(segment);
export const segmentToString = segment => `[${pointToString(car(segment))}, ` + `${pointToString(cdr(segment))}]`;
export const midpointSegment = (segment) => {
  const x1 = car(startSegment(segment));
  const y1 = cdr(startSegment(segment));
  const x2 = car(endSegment(segment));
  const y2 = cdr(endSegment(segment));
  
  const x = (x1 + x2) / 2;
  const y = (y1 + y2) / 2;
  
  const midPoint = cons(x, y);
  return midPoint;
};
// END