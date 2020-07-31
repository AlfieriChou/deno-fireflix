import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { objectToPairs, objectFromPairs } from "../../mod.ts";

const { test } = Deno;

test("testObjectToPairs", () => {
  const testObject = { a: 1, b: 2 };
  const ret = objectToPairs(testObject);
  assertEquals([["a", 1], ["b", 2]], ret);
});

test('testObjectFromPairs', () => {
  const testArr = [["a", 1], ["b", 2]];
  const ret = objectFromPairs(testArr);
  assertEquals({ a: 1, b: 2 }, ret);
});
