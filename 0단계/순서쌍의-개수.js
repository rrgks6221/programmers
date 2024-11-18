function solution(n) {
  let orderedPairCount = 0;

  for (let i = 1; i <= n; i += 1) {
    orderedPairCount += Number(n % i === 0);
  }

  return orderedPairCount;
}
