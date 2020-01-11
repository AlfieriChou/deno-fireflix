export const stringPermutations = (str: string): string[] => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc: string[], letter, i) => acc.concat(
        stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val),
      ), []);
};