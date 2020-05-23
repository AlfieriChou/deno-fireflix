interface IKeysMapObject {
  [s: string]: string;
}

interface IObject {
  [s: string]: any;
}

export const renameKeys = (keysMap: IKeysMapObject, obj: IObject): IObject => 
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {},
  );
