export const permutation = <T>(items: T[][], prepend: T[] = []): T[][] => {
  if (!items || items.length === 0) return [prepend];

  return items[0].reduce((result: T[][], value) =>
    result.concat(
      permutation(items.slice(1), [...prepend, value]),
    ), []);
};
