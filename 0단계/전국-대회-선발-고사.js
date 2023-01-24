function solution(rank, attendance) {
  return rank
    .map((el, idx) => [idx, el])
    .filter((_el, idx) => attendance[idx])
    .sort((a, b) => a[1] - b[1])
    .slice(0, 3)
    .reduce((acc, cur, idx, arr) => {
      if (idx === 0) {
        return acc + cur[0] * 10000;
      }
      if (idx === 1) {
        return acc + cur[0] * 100;
      }
      return acc + cur[0];
    }, 0);
}
