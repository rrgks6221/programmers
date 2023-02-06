function solution(ineq, eq, n, m) {
  const operator = ineq + eq;

  if (operator === '>=') {
    return Number(n >= m);
  }
  if (operator === '<=') {
    return Number(n <= m);
  }
  if (operator === '>!') {
    return Number(n > m);
  }
  return Number(n < m);
}
