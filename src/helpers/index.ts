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
//пузырек
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
  // return arr;
};

//вставки
export const insertionSort = async (
  arr: number[],
  delay: number,
  compare = defaultCompare
) => {
  const { length } = arr;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = arr[i];
    while (j > 0 && compare(arr[j - 1], temp) === Compare.BIGGER_THAN) {
      delay && (await sleep(delay));
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
};
//выбором
export const selectionSort = async (
  arr: number[],
  delay: number,
  compare = defaultCompare
) => {
  const { length } = arr;
  let minIndex;
  for (let i = 0; i < length - 1; i++) {
    minIndex = i;

    for (let j = i; j < length; j++) {
      delay && (await sleep(delay));
      if (compare(arr[minIndex], arr[j]) === Compare.BIGGER_THAN) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
};
