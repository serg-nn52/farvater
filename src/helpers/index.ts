export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

export const swap = (arr: number[], a: number, b: number) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

export const defaultCompare = (a: number, b: number) => {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};
export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const bubbleSort = async (
  arr: number[],
  delay: number,
  compare = defaultCompare
) => {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      delay && (await sleep(delay));
      if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};
