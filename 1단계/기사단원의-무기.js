function solution(number, limit, power) {
  const getDivisorCount = (num) => {
    let count = 0;
    const sqrt = Math.sqrt(num);

    for (let i = 1; i <= sqrt; i += 1) {
      if (num % i === 0) {
        count += 2;

        if (i * i === num) {
          count -= 1;
        }
      }
    }

    return count;
  };

  let result = 0;

  for (let i = 1; i <= number; i += 1) {
    const divisorCount = getDivisorCount(i);

    if (divisorCount > limit) {
      result += power;
    } else {
      result += divisorCount;
    }
  }

  return result;
}
