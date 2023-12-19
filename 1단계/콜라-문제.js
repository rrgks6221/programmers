function solution(a, b, n, c = 0) {
  if (a > n) {
    return c;
  }

  c += Math.floor(n / a) * b;
  n = Math.floor(n / a) * b + (n % a);

  return solution(a, b, n, c);
}
