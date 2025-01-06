function solution(numbers, n) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];

    if (sum > n) {
      return sum;
    }
  }

  return sum;
}
