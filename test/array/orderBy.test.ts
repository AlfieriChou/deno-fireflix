import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { orderBy } from '../../mod.ts';

const { test } = Deno

interface IPeople {
  name: string
  age: number
}

const peoples: IPeople[] = [
  { name: 'Edward', age: 21 },
  { name: 'Sharpe', age: 37 },
  { name: 'And', age: 45 },
  { name: 'The', age: 12 },
  { name: 'Magnetic', age: 13 },
  { name: 'Zeros', age: 37 },
];

const ascAgePeoples: IPeople[] = [
  { name: 'The', age: 12 },
  { name: 'Magnetic', age: 13 },
  { name: 'Edward', age: 21 },
  { name: 'Sharpe', age: 37 },
  { name: 'Zeros', age: 37 },
  { name: 'And', age: 45 },
];

const descAgePeoples: IPeople[] = [
  { name: 'And', age: 45 },
  { name: 'Sharpe', age: 37 },
  { name: 'Zeros', age: 37 },
  { name: 'Edward', age: 21 },
  { name: 'Magnetic', age: 13 },
  { name: 'The', age: 12 },
];

test('testASCOrderBy', () => {
  const ret = orderBy(peoples, 'age')
  assertEquals(ascAgePeoples, ret);
});

test('testDESCOrderBy', () => {
  const ret = orderBy(peoples, '-age')
  assertEquals(descAgePeoples, ret);
});
