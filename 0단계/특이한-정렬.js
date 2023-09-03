function solution(numlist, n) {
  return numlist.sort((a, b) => {
    return Math.abs(n - a) - Math.abs(n - b) || b - a;
  });
}
