function solution(a, b) {
  const getGreatestCommonDivisor = (number1, number2) => {
    let greatestCommonDivisor = 1;

    const min = Math.min(number1, number2);

    for (let i = 0; i <= min; i += 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        greatestCommonDivisor = i;
      }
    }

    return greatestCommonDivisor;
  };

  b = b / getGreatestCommonDivisor(a, b);

  for (let i = 3; i <= b; i += 2) {
    if (i % 5 === 0) {
      continue;
    }

    if (b % i === 0) {
      return 2;
    }
  }

  return 1;
}
