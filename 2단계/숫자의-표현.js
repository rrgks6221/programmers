function solution(n) {
  if (n < 3) return 1;
  let result = 0;
  let a = 0;
  let b = 1;
  let count = 0;

  while (a < n) {
    count += 1;
    a += b;
    b += 1;
  }

  for (let i = 1; i <= n; i++) {
    let temp = 0;
    for (let j = i; j <= count + i; j++) {
      temp += j;
      if (temp === n) {
        result += 1;
        break;
      }
    }
  }
  return result;
}
