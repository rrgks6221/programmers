function solution(arr) {
  return arr.flatMap((el) => Array.from({ length: el }, () => el));
}
