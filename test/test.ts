import { runTests } from 'https://deno.land/std/testing/mod.ts';
import './array/difference.test.ts';
import './array/intersection.test.ts';
import './array/nest.test.ts';
import './array/numberGroupBy.test.ts';
import './array/orderBy.test.ts';
import './array/permutation.test.ts';
import './object/deepMapKeys.test.ts';
import './object/pair.test.ts';
import './object/renameKeys.test.ts';
import './string/permutation.test.ts';

runTests();
