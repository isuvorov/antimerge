import _ from 'lodash';

const antimerge = (a, b) => {
  if (!_.isObject(a)) return null;
  if (!_.isObject(b)) return null;
  const res = {};
  for (const k in a) {
    if (a.hasOwnProperty(k)) {
      if (_.isEqual(a[k], b[k])) continue;
      res[k] = a[k];
    }
  }
  const diff = _.differenceWith(Object.keys(b), Object.keys(a), _.isEqual);
  diff.forEach((d) => {
    res[d] = undefined;
  });
  return res;
};

export default antimerge;
