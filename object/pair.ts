interface PairObject {
  [s: string]: string | number;
}

export const objectToPairs = (
  obj: PairObject,
): (string | number)[][] => Object.keys(obj).map((k) => [k, obj[k]]);

export const objectFromPairs = (
  arr: (string | number)[][],
): Object => arr.reduce((a, [key, val]) => ({ ...a, [key]: val }), {});
