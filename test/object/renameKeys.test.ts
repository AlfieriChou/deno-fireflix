import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { renameKeys } from '../../mod.ts';

const { test } = Deno

test('testRenameKeys', () => {
  const obj: Object = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
  const ret = renameKeys({ name: 'firstName', job: 'passion' }, obj);
  assertEquals({ firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }, ret);
});
