function solution(x) {
  const numArr = String(x).split('');
  let sum = 0;
  for (let i of numArr) sum += Number(i);
  return (x / sum) % 1 === 0;
}
