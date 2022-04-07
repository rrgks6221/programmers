function solution(n, k) {
  return n
    .toString(k)
    .split('0')
    .filter((number) => !(number === '1' || number === ''))
    .reduce((acc, cur) => acc + isPrime(cur), 0);
}

function isPrime(num) {
  if (num === 2) return 1;

  const condition = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= condition; i++) {
    if (num % i === 0) return 0;
  }

  return 1;
}
