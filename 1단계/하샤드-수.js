function solution(x) {
  const numArr = String(x).split('');
  let sum = 0;

  for (const num of numArr) sum += Number(num);

  return (x / sum) % 1 === 0;
}
