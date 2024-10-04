function solution(n, t) {
  if (t === 0) {
    return n;
  }

  return solution(n * 2, t - 1);
}
