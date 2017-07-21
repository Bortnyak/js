// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const make = (numer, denom) => cons(numer, denom);
export const numer = (pair) => car(pair);
export const denom = (pair) => cdr(pair);

export const toString = (pair) => {
  return `${car(pair)}` + " / "+ `${cdr(pair)}`;
}

export const isEqual = (pair1, pair2) => {
  if (car(pair1) / cdr(pair1) == car(pair2) / cdr(pair2)) {
    return true;
  } else {
    return false;
  }
}

export const add = (pair1, pair2) => {
  const numer = (car(pair1) * cdr(pair2) + cdr(pair1) * car(pair2));
  const denom = (cdr(pair1) * cdr(pair2));
  const res = make(numer, denom);
  return res;
}

export const sub = (pair1, pair2) => {
  const numer = (car(pair1) * cdr(pair2) - cdr(pair1) * car(pair2));
  const denom = (cdr(pair1) * cdr(pair2));
  const res = make(numer, denom);
  return res;
}

export const mul = (pair1, pair2) => {
  const numer = car(pair1) * car(pair2);
  const denom = cdr(pair1) * cdr(pair2);
  const res = make(numer, denom);
  return res;
}

export const div = (pair1, pair2) => {
  const numer = car(pair1) * cdr(pair2);
  const denom = cdr(pair1) * car(pair2);
  const res = make(numer, denom);
  return res;
}

// END
