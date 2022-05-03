function solution(n, result = 1) {
  if (n === 1) return result;
  if (n % 2 === 0) return solution(n / 2, result);
  return solution(n - 1, (result += 1));
}
