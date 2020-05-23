interface OrderByObject {
  [property: string]: string | number;
}

const dynamicSort = (prop: string): ((a: OrderByObject, b: OrderByObject) => number) => {
  let order: number = 1;
  let property: string;
  if (prop.startsWith("-")) {
    order = -1;
    property = prop.substring(1);
  } else {
    property = prop;
  }
  return (a, b) => {
    let ret: number;
    if (a[property] < b[property]) {
      ret = -1;
    } else if (a[property] > b[property]) {
      ret = 1;
    } else {
      ret = 0;
    }
    return ret * order;
  };
};

export const orderBy = (objs: OrderByObject[], property: string): OrderByObject[] =>
  objs.sort(dynamicSort(property));
