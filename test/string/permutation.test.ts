import { test } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { stringPermutations } from '../../mod.ts';

test(function testStringPermutations() {
  const ret1 = stringPermutations('a');
  assertEquals(['a'], ret1);

  const ret2 = stringPermutations('ab');
  assertEquals(['ab', 'ba'], ret2);

  const ret3 = stringPermutations('abc');
  assertEquals(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'], ret3);
});
