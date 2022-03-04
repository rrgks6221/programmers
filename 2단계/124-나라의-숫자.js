function solution(n) {
  const result = n
    .toString(3)
    .split('')
    .map((num) => +num);

  result.forEach((_, idx) => {
    for (let i = idx; i > 0; i -= 1) {
      if (result[i] === 0) {
        result[i - 1] -= 1;
        result[i] = 4;
      }
    }
  });

  return result.join('').replace(/3/g, '2').replace(/0/g, '');
}
