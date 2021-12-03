function solution(n, left, right) {
  const result = [];

  for (let i = left; i <= right; i += 1) {
    let repeat = parseInt(i / n) + 1;

    if (i % n < repeat) {
      result.push(repeat);
    } else {
      const plus = Math.abs(parseInt(i / n) - (i % n));
      result.push(repeat + plus);
    }
  }

  return result;
}

console.log(solution(4, 7, 14));
