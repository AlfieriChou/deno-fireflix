import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { permutation } from '../../mod.ts';

const { test } = Deno

test('testPermutation', () => {
  const testArray: Object[][] = [
    [{ a: '1' }, { a: '2' }, { a: '3' }],
    [{ b: '4' }, { b: '5' }],
    [{ c: '6' }, { c: '7' }],
  ];
  const ret = permutation(testArray, []);
  assertEquals([
    [{ a: '1' }, { b: '4' }, { c: '6' }],
    [{ a: '1' }, { b: '4' }, { c: '7' }],
    [{ a: '1' }, { b: '5' }, { c: '6' }],
    [{ a: '1' }, { b: '5' }, { c: '7' }],
    [{ a: '2' }, { b: '4' }, { c: '6' }],
    [{ a: '2' }, { b: '4' }, { c: '7' }],
    [{ a: '2' }, { b: '5' }, { c: '6' }],
    [{ a: '2' }, { b: '5' }, { c: '7' }],
    [{ a: '3' }, { b: '4' }, { c: '6' }],
    [{ a: '3' }, { b: '4' }, { c: '7' }],
    [{ a: '3' }, { b: '5' }, { c: '6' }],
    [{ a: '3' }, { b: '5' }, { c: '7' }],
  ], ret);
});
