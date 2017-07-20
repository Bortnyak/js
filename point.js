import { makePoint, getX, getY } from 'hexlet-points';

export const quadrant = (point) => {
  let x = getX(point);
  let y = getY(point);
  let quadrant = 0;
  
  if (x > 0 && y > 0) {
    quadrant = 1
    return quadrant;
  } else if (x > 0 && y < 0) {
    quadrant = 4;
    return quadrant;
  } else if (x < 0 && y < 0) {
    quadrant = 3;
    return quadrant;
  } else if (x < 0 && y > 0) {
    quadrant = 2;
    return quadrant;
  } else {
    return null;
  }
}

export const symmetricalPoint = (point) => {
  let symX = -getX(point);
  let symY = -getY(point);
  
  let newPoint = makePoint(symX, symY);
  return newPoint;
}

export const distance = (point1, point2) => {
  let xP1 = getX(point1);
  let yP1 = getY(point1);
  
  let xP2 = getX(point2);
  let yP2 = getY(point2);
  
  let distance = Math.sqrt(Math.pow(xP2 - xP1, 2) + Math.pow(yP2 - yP1, 2));
  return distance;
}