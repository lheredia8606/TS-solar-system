export const minBy = <T>(
  array: T[],
  cb: (arg: T) => number | string
): T | undefined => {
  if (!array || array.length === 0) return undefined;
  let current: T | undefined;
  for (let element of array) {
    if (current === undefined || cb(element) < cb(current)) {
      current = element;
    }
  }
  return current;
};

export function maxBy<T>(
  array: T[],
  cb: (arg: T) => number | string
): T | undefined {
  if (!array || array.length === 0) return undefined;
  let current: T | undefined;
  for (let element of array) {
    if (current === undefined || cb(element) > cb(current)) {
      current = element;
    }
  }
  return current;
}
