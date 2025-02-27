function solution(arr) {
  let initialNumber = 0;
  const stk = [];

  while (initialNumber < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[initialNumber]);
      initialNumber += 1;
      continue;
    }

    if (stk.at(-1) < arr[initialNumber]) {
      stk.push(arr[initialNumber]);
      initialNumber += 1;
    } else {
      stk.pop();
    }
  }

  return stk;
}
