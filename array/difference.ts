export const symmetricDifference = <T>(a: T[], b: T[]): T[] => {
  const sA = new Set(a);
  const sB = new Set(b);
  return [...a.filter((x) => !sB.has(x)), ...b.filter((x) => !sA.has(x))];
};

export const uniqueSymmetricDifference = <T>(a: T[], b: T[]): T[] => [
  ...new Set(
    [...a.filter((v) => !b.includes(v)), ...b.filter((v) => !a.includes(v))],
  ),
];
