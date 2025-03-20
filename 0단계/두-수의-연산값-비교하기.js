function solution(a, b) {
  const ab = String(a) + String(b);

  return Math.max(Number(ab), 2 * a * b);
}
