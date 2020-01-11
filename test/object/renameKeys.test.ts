import { test } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { renameKeys } from '../../mod.ts';

test(function testRenameKeys() {
  const obj: Object = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
  const ret = renameKeys({ name: 'firstName', job: 'passion' }, obj);
  assertEquals({ firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }, ret);
});
