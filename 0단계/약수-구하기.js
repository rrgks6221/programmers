function solution(n) {
  const divisors = [];

  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}
