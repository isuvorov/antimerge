/* eslint-env jest */
import _ from 'lodash';
import deepmerge from 'deepmerge';
import antimerge from '../src/index';

describe('antimerge set', () => {
  const testcasesImmutable = require('./testcases/antimerge').default;
  describe('antimerge testes with manual result', () => {
    const testcases = _.cloneDeep(testcasesImmutable);
    testcases.forEach((test) => {
      it(`should return ${JSON.stringify(test[2])}`, () => {
        expect(antimerge(test[0], test[1])).toEqual(test[2]);
      });
    });
  });

  describe('antimerge testes with Object.assign', () => {
    const testcases = _.cloneDeep(testcasesImmutable);
    testcases.forEach((test) => {
      it(`should return ${JSON.stringify(test[2])}`, () => {
        const result = antimerge(test[0], test[1]);
        if (result) {
          const newObject = Object.assign(test[1], result);
          expect(_.isEqual(test[0], JSON.parse(JSON.stringify(newObject)))).toEqual(true);
        } else {
          expect(result).toEqual(test[2]);
          expect(result).toEqual(null);
        }
      });
    });
  });

  describe('antimerge testes with deepmerge', () => {
    const testcases = _.cloneDeep(testcasesImmutable);
    testcases.forEach((test) => {
      it(`should return ${JSON.stringify(test[2])}`, () => {
        const result = antimerge(test[0], test[1]);
        if (result) {
          const newObject = deepmerge(test[1], result);
          expect(_.isEqual(test[0], JSON.parse(JSON.stringify(newObject)))).toEqual(true);
        } else {
          expect(result).toEqual(test[2]);
          expect(result).toEqual(null);
        }
      });
    });
  });
});
