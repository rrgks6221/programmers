function solution(numbers) {
  const sortedNumber = [...numbers].sort((a, b) => b - a);

  return sortedNumber[0] * sortedNumber[1];
}
