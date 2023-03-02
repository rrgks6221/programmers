function solution(numbers) {
  const MULTIPLE_VALUE = 2;

  return numbers.map((number) => {
    return number * MULTIPLE_VALUE;
  });
}
