import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; 
import { name, value, node, is, toString as htmlToString } from 'hexlet-html-tags';
import { reverse as reverseStr } from './strings';

export const map = (func, elements) => {
  if (isEmpty(elements)) {
    return l();
  }
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    return iter(tail(items), cons(func(head(items)), acc));
  };

  return iter(elements, l());
};

export const mirror = (elements) => {
  return map(element => node(name(element), reverseStr(value(element))), elements);
};

export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};