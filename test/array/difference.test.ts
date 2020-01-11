import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { symmetricDifference, uniqueSymmetricDifference } from "../../mod.ts";

test(function testSymmetricDifference() {
  const ret = symmetricDifference([1, 2, 3], [1, 2, 4]);
  assertEquals([3, 4], ret);
});

test(function testUniqueSymmetricDifference() {
  const ret = uniqueSymmetricDifference([1, 2, 2], [1, 3, 1]);
  assertEquals([2, 3], ret);
});
