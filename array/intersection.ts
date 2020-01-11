export const intersection = <T>(
  a: T[],
  b: T[],
): T[] => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

export const intersectionBy = <T>(
  a: T[],
  b: T[],
  fn: (a: T) => T,
): T[] => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

export const intersectionWith = <T>(
  a: T[],
  b: T[],
  comp: (a: T, b: T) => boolean,
): T[] => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);
