function solution(arr, idx) {
  return arr.findIndex((el, i) => {
    return el && i >= idx;
  });
}
