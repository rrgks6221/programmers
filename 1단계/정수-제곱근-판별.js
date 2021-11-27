function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? Math.pow(parseInt(Math.sqrt(n) + 1), 2) : -1;
}