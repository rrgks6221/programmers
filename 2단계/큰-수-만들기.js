function solution(number, k) {
  const numbers = number.split('').reverse();
  const stack = [numbers.pop()];

  while (numbers.length) {
    if (stack.length === 0) stack.push(numbers.pop());
    if (numbers[numbers.length - 1] <= stack[stack.length - 1]) {
      stack.push(numbers.pop());
      continue;
    }
    while (stack.length) {
      if (k === 0) return stack.join('') + numbers.reverse().join('');
      if (numbers[numbers.length - 1] <= stack[stack.length - 1]) break;

      stack.pop();
      k -= 1;
    }
  }

  return stack.join('').slice(0, stack.length - k);
}
