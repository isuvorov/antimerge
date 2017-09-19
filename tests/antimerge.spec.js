import antimerge from '../src/index.js';
import testcases from './testcases/antimerge.js';

describe('antimerge testes', () => {
    testcases.forEach((test) => {
         it(`should return ${JSON.stringify(test[2])}`, () => {
             expect(antimerge(test[0], test[1])).toEqual(test[2]);
         })
    })
});
