 // eslint-disable-next-line
import { makePoint, getX, getY, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr } from 'hexlet-pairs';
// BEGIN (write your solution here)
import * as points from 'hexlet-points';

export const makeSegment = (point1, point2) => {
  const segment = makePoint(point1, point2);
  return segment;
}

export const startSegment = (segment) => {
  const startPoint = car(segment);
  return startPoint;
}

export const endSegment = (segment) => {
  const endPoint = cdr(segment);
  return endPoint;
}

export const segmentToString = (segment) => {
  return `[${pointToString(car(segment))}, ${pointToString(cdr(segment))}]`;
}

export const midpointSegment = (segment) => {
  const x1 = car(car(segment));
  const x2 = car(cdr(segment));
  const y1 = cdr(car(segment));
  const y2 = cdr(cdr(segment));

  const x = (x1 + x2) / 2;
  const y = (y1 + y2) / 2;

  const point = makePoint(x,y);

  return point;
}
// END