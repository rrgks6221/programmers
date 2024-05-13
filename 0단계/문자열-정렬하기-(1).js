function solution(my_string) {
  return my_string
    .replace(/[A-z]/g, '')
    .split('')
    .sort((a, b) => a - b)
    .map((string) => Number(string));
}
