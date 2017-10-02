import _ from 'lodash';

export const antimerge = (a, b) => {
  if (!_.isObject(a)) return null;
  if (!_.isObject(b)) return null;
  const res = {};
  for (const k in a) {
    if ({}.hasOwnProperty.call(a, k)) {
      if (!_.isEqual(a[k], b[k])) {
        res[k] = a[k];
      }
    }
  }
  const diff = _.differenceWith(Object.keys(b), Object.keys(a), _.isEqual);
  diff.forEach((d) => {
    res[d] = undefined;
  });
  return res;
};

export const antimergeDeep = (a, b) => {
  if (!_.isObject(a)) return null;
  if (!_.isObject(b)) return null;
  const res = {};
  for (const k in a) {
    if ({}.hasOwnProperty.call(a, k)) {
      if (!_.isEqual(a[k], b[k])) {
        if (_.isObject(a[k]) && _.isObject(b[k])) {
          res[k] = antimergeDeep(a[k], b[k]);
        } else {
          res[k] = a[k];
        }
      }
    }
  }
  const diff = _.differenceWith(Object.keys(b), Object.keys(a), _.isEqual);
  diff.forEach((d) => {
    res[d] = undefined;
  });
  return res;
};
