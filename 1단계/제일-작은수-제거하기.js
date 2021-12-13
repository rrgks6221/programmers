function solution(arr) {
  const min = Math.min(...arr);
  const result = arr.filter((el) => min < el);

  return result.length !== 0 ? result : [-1];
}
