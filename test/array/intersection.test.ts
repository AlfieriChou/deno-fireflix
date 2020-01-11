import { test } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { intersection, intersectionBy, intersectionWith } from '../../mod.ts';

test(function testIntersection() {
  const ret = intersection([1, 2, 3], [4, 3, 2]);
  assertEquals([2, 3], ret);
});

test(function testIntersectionBy() {
  const ret = intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
  assertEquals([2.1], ret);
});

test(function testIntersectionWith() {
  const ret = intersectionWith(
    [1, 1.2, 1.5, 3, 0],
    [1.9, 3, 0, 3.9],
    (a, b) => Math.round(a) === Math.round(b),
  );
  assertEquals([1.5, 3, 0], ret);
});
