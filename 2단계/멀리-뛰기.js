function solution(n) {
  const fibonacci = Array.from({ length: n + 1 });
  fibonacci[0] = BigInt(1);
  fibonacci[1] = BigInt(2);
  fibonacci[2] = BigInt(3);
  fibonacci[3] = BigInt(5);

  for (let i = 4; i < fibonacci.length; i += 1) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return Number(fibonacci[n - 1] % BigInt(1234567));
}
