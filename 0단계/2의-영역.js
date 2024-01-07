function solution(arr) {
  const leftIndex = arr.findIndex((el) => el === 2);
  let rightIndex = -1;

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] === 2) {
      rightIndex = i;
      break;
    }
  }

  if (leftIndex === -1) {
    return [-1];
  }

  if (leftIndex === rightIndex) {
    return [2];
  }

  return arr.slice(leftIndex, rightIndex + 1);
}
