function solution(n) {
  const isCompositeNumber = (number) => {
    let divisorCount = 0;

    if (number <= 3) {
      return false;
    }

    for (let i = 1; i <= number; i += 1) {
      if (number % i === 0) {
        divisorCount += 1;
      }
    }

    return divisorCount >= 3;
  };

  let compositeNumberCount = 0;

  for (let i = 4; i <= n; i += 1) {
    compositeNumberCount += Number(isCompositeNumber(i));
  }

  return compositeNumberCount;
}
