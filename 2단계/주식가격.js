function solution(prices) {
  const stack = [prices.shift()];
  let min = stack[0];
  let idx = 0;

  while (prices.length) {
    stack.forEach((_el, idx) => {
      stack[idx] += 1;
    });

    if (idx > prices.length) {
      for (let i = 0; i < prices.length; i += 1) {
        stack.push(0);
      }
    }

    console.log(idx, min);
    console.log(prices, stack);

    if (prices[idx] > min) {
      min = prices[idx];

      for (let i = 0; i < idx + 1; i += 1) {
        stack.push(0);
      }

      prices.splice(0, idx + 1);
      idx = 0;
    }

    idx += 1;
  }

  return stack;
}

console.log(solution([1, 2, 3, 2, 3]));
