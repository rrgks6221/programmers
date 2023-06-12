function solution(n) {
  let fac = 1;
  let result = 0;

  while (fac <= n) {
    result += 1;

    fac *= result;
  }

  return result - 1;
}
