function solution(num_list) {
  const oddSum = num_list
    .filter((_num, idx) => {
      return idx % 2 === 1;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  const evenSum = num_list
    .filter((_num, idx) => {
      return idx % 2 === 0;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  return Math.max(oddSum, evenSum);
}
