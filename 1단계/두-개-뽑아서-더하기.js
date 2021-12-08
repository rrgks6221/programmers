function solution(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      result.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(result)].sort((a, b) => a - b);
}
