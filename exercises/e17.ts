export const minBy = <T>(array: T[], cb: (arg: T | undefined) => T) => {
  if (!array || array.length === 0) return undefined;
  let min = cb(array[0]);
  let minPosition = 0;
  for (let i = 1; i < array.length; i++) {
    const newElement = cb(array[i]);
    if (newElement < min) {
      min = newElement;
      minPosition = i;
    }
  }
  return array[minPosition];
};

export function maxBy<T>(array: T[], cb: (arg: T | undefined) => number) {
  if (!array || array.length === 0) return undefined;
  let max = cb(array[0]);
  let maxPosition = 0;
  for (let i = 1; i < array.length; i++) {
    const newElement = cb(array[i]);
    if (newElement > max) {
      max = newElement;
      maxPosition = i;
    }
  }
  return array[maxPosition];
}
