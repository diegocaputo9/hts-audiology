import test from 'node:test';
import assert from 'node:assert/strict';
import { reflectionScore } from '../src/lib/check-in.mjs';
test('all zero answers produce a zero reflection score', () => assert.equal(reflectionScore([0,0,0,0,0]), 0));
test('all maximum answers produce 100', () => assert.equal(reflectionScore([10,10,10,10,10]), 100));
test('mixed answers use the stated average times ten', () => assert.equal(reflectionScore([1,3,5,7,9]), 50));
test('missing, nonnumeric, fractional, and out-of-range answers are rejected', () => {
 for (const answers of [[0,0,0,0], [null,1,2,3,4], [11,1,2,3,4], [-1,0,0,0,0], [1.5,0,0,0,0]]) assert.throws(() => reflectionScore(answers), RangeError);
});
