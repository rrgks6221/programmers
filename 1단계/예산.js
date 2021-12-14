function solution(d, budget) {
  let result = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; d[i] <= budget; i += 1) {
    budget -= d[i];
    result += 1;
  }

  return result;
}
