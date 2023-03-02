function solution(numer1, denom1, numer2, denom2) {
  const division = (number1, number2) => {
    return number1 / number2;
  };

  const add = (number1, number2) => {
    return number1 + number2;
  };

  const multiply = (number1, number2) => {
    return number1 * number2;
  };

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

  const getIrreducibleFraction = (numerator, denominator) => {
    const valueToDivide = getGreatestCommonDivisor(numerator, denominator);
    const isIrreducibleFraction = valueToDivide !== 1;

    return isIrreducibleFraction
      ? getIrreducibleFraction(
          division(numerator, valueToDivide),
          division(denominator, valueToDivide)
        )
      : [numerator, denominator];
  };

  const numerator = add(multiply(numer1, denom2), multiply(denom1, numer2));
  const denominator = multiply(denom1, denom2);

  return getIrreducibleFraction(numerator, denominator);
}
