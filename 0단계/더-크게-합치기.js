function solution(a, b) {
  const ab = String(a) + String(b);
  const ba = String(b) + String(a);

  return Math.max(Number(ab), Number(ba));
}
