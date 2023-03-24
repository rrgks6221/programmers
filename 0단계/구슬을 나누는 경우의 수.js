function solution(balls, share) {
  const factorial = (number) => {
    let result = BigInt(1);

    for (let i = 2; i <= number; i += 1) {
      result *= BigInt(i);
    }

    return result;
  };

  if (balls === share) {
    return 1;
  }

  return factorial(balls) / (factorial(balls - share) * factorial(share));
}
