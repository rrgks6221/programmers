function solution(n) {
  const sumOddNumber = (num) => {
    let total = 0;

    for (let i = 1; i <= num; i += 2) {
      total += i;
    }

    return total;
  };

  const squareSumEvenNumber = (num) => {
    let total = 0;

    for (let i = 2; i <= num; i += 2) {
      total = total + i ** 2;
    }

    return total;
  };

  const isEvenNumber = n % 2 === 0;

  if (isEvenNumber) {
    return squareSumEvenNumber(n);
  }
  return sumOddNumber(n);
}
