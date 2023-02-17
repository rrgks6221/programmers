function solution(arr, k) {
  if (k % 2 === 0) {
    return arr.map((el) => el + k);
  }
  return arr.map((el) => el * k);
}
