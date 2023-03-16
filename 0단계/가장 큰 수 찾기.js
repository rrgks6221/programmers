function solution(array) {
  const max = Math.max(...array);
  const maxIdx = array.findIndex((el) => el === max);

  return [max, maxIdx];
}
