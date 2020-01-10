import { test, runTests } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { deepMapKeys } from "../../mod.ts";

test(function testDeepMapKeysObject() {
  const obj = {
    foo: '1',
    nested: {
      child: {
        a: 1,
      },
    },
  };
  const ret = deepMapKeys(obj, (key: string) => key.toUpperCase());
  assertEquals({ FOO: '1', NESTED: { CHILD: { A: 1 } } }, ret);
});

test(function testDeepMapKeysArray() {
  const arr = [
    {
      abc: ['hello'],
    },
  ];
  const ret = deepMapKeys(arr, (key: string) => key.toUpperCase());
  assertEquals([{ ABC: ['hello'] }], ret);
})

runTests();
