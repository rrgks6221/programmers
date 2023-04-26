function solution(numbers, direction) {
  if (direction === 'right') {
    numbers.unshift(numbers.pop());

    return numbers;
  }

  numbers.push(numbers.shift());

  return numbers;
}
