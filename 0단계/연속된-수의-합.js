function solution(num, total) {
  const result = Array.from({ length: num }, (_, idx) => {
    return idx + 1;
  });
  const sum = result.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  const incrementValue = (total - sum) / num;

  return result.map((el) => {
    return el + incrementValue;
  });
}
