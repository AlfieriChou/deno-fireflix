export const objectToPairs = (
  obj: Object,
): Array<Array<string | number>> => Object.keys(obj).map(k => [k, obj[k]]);

export const objectFromPairs = (
  arr: Array<Array<string | number>>,
): Object => arr.reduce((a, [key, val]) => {
  a[key] = val;
  return a;
}, {});
