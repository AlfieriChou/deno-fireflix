import { test } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { numberGroupBy } from '../../mod.ts';

test(function testNumberGroupBy() {
  const ret = numberGroupBy([
    { name: 'dog', category: 'animal' },
    { name: 'osmanthus', category: 'plant' },
    { name: 'cat', category: 'animal' },
  ], 2);
  assertEquals([
    [
      { name: 'dog', category: 'animal' },
      { name: 'osmanthus', category: 'plant' },
    ],
    [
      { name: 'cat', category: 'animal' },
    ],
  ], ret);
});
