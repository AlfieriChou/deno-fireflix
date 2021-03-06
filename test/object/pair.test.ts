import { test } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { objectToPairs, objectFromPairs } from '../../mod.ts';

test(function testObjectToPairs() {
  const testObject = { a: 1, b: 2 };
  const ret = objectToPairs(testObject);
  assertEquals([['a', 1], ['b', 2]], ret);
});

test(function testObjectFromPairs() {
  const testArr = [['a', 1], ['b', 2]];
  const ret = objectFromPairs(testArr);
  assertEquals({ a: 1, b: 2 }, ret);
});
