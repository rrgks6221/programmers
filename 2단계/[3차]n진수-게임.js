function solution(n, t, m, p) {
  let number = '';
  let result = '';

  for (let i = 0; i < t * m; i += 1) {
    number += i.toString(n);
  }

  for (let i = 0, idx = p - 1; i < t; i += 1, idx += m) {
    result += number[idx];
  }

  return result.toUpperCase();
}
