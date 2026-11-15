import test from 'node:test';
import assert from 'node:assert/strict';
import { reflectionScore } from '../src/lib/check-in.mjs';
test('all zero answers produce a zero reflection score', () => assert.equal(reflectionScore([0,0,0,0,0]), 0));
test('all maximum answers produce 100', () => assert.equal(reflectionScore([10,10,10,10,10]), 100));
test('mixed answers use the stated average times ten', () => assert.equal(reflectionScore([1,3,5,7,9]), 50));
test('missing, nonnumeric, fractional, and out-of-range answers are rejected', () => {
 for (const answers of [[0,0,0,0], [null,1,2,3,4], [11,1,2,3,4], [-1,0,0,0,0], [1.5,0,0,0,0]]) assert.throws(() => reflectionScore(answers), RangeError);
});

test('feedback describes every answer without diagnosing severity', async () => {
 const { answerFeedback, areas } = await import('../src/lib/check-in.mjs');
 for (let area=0; area<5; area++) for(let rating=0;rating<=10;rating++) {
  const feedback=answerFeedback(area,rating);
  assert.ok(feedback.title.includes(areas[area]));
  assert.ok(feedback.title.includes(`${rating} out of 10`));
  assert.ok(feedback.description.length>20 && feedback.suggestion.length>20);
 }
 assert.throws(()=>answerFeedback(5,3),RangeError);
 assert.throws(()=>answerFeedback(0,null),RangeError);
});
test('priorities preserve a strong single-area rating and ties', async () => {
 const { reflectionPriorities }=await import('../src/lib/check-in.mjs');
 assert.deepEqual(reflectionPriorities([0,0,10,0,0]),{highest:10,indices:[2]});
 assert.deepEqual(reflectionPriorities([8,2,8,1,0]),{highest:8,indices:[0,2]});
 assert.deepEqual(reflectionPriorities([0,0,0,0,0]),{highest:0,indices:[]});
 assert.throws(()=>reflectionPriorities([0,null,0,0,0]),RangeError);
});
