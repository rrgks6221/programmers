function solution(arr) {
  const stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else if (stk.at(-1) === arr[i]) {
      stk.pop();
    } else {
      stk.push(arr[i]);
    }

    i += 1;
  }

  return stk.length !== 0 ? stk : [-1];
}
