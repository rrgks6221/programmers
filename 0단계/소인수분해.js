function solution(n) {
  const answer = [];

  const divisor = (number) => {
    for (let i = 2; i <= number; i += 1) {
      if (Number.isInteger(n / i)) {
        n /= i;

        answer.push(i);
        return divisor(n);
      }
    }
  };

  divisor(n);

  return [...new Set(answer)];
}
