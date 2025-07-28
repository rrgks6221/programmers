function reconfigure(stack, number) {
  const lastStackValue = stack.at(-1);
  if (lastStackValue !== undefined && lastStackValue <= number) {
    stack.pop();

    reconfigure(stack, number);
  }

  return stack;
}

function solution(numbers) {
  const stack = [];
  const result = [];

  while (numbers.length > 0) {
    const number = numbers.pop();

    let bigNumber = -1;

    for (let i = stack.length - 1; i >= 0; i -= 1) {
      if (stack[i] > number) {
        bigNumber = stack[i];
        break;
      }
    }

    reconfigure(stack, number);

    stack.push(number);
    result.push(bigNumber);
  }

  return result.reverse();
}
