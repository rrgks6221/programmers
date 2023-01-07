function solution(num_list) {
  const multiply = num_list.reduce((acc, cur) => {
    return acc * cur;
  }, 1);
  const sum = num_list.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  const squareSum = sum ** 2;

  return Number(multiply < squareSum);
}
