function solution(numbers) {
  return numbers
    .map((v) => String(v))
    .sort((a, b) => b + a - (a + b))
    .join('')
    .replace(/^0+/, '0');
}
