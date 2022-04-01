function solution(numbers) {
  const result = [];
  const newNumbers = numbers.map((number) => (number + 1).toString(2));
  numbers.forEach((number, idx) => (numbers[idx] = number.toString(2)));

  for (let i = 0; i < numbers.length; i += 1) {
    let other = 0;

    if (numbers[i][numbers[i].length - 1] === '0') {
      result.push(newNumbers[i]);
      continue;
    }

    if (numbers[i].length !== newNumbers[i].length) {
      numbers[i] = '0' + numbers[i];
    }

    for (let j = 0; j < numbers[i].length; j += 1) {
      if (numbers[i][j] !== newNumbers[i][j]) other += 1;
    }

    if (other <= 2) {
      result.push(newNumbers[i]);
      continue;
    }

    for (let j = numbers[i].length - 1; j >= 0; j -= 1) {
      if (other <= 2) {
        result.push(newNumbers[i]);
        break;
      }
      if (numbers[i][j] !== newNumbers[i][j]) {
        newNumbers[i] =
          newNumbers[i].slice(0, j) + '1' + newNumbers[i].slice(j + 1);

        other -= 1;
      }
    }
  }

  return result.map((binary) => parseInt(binary, 2));
}
