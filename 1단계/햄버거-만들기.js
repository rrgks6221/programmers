function solution(ingredient) {
  let result = 0;
  const stack = [];

  ingredient.forEach((el) => {
    stack.push(el);

    if (
      stack.at(-4) === 1 &&
      stack.at(-3) === 2 &&
      stack.at(-2) === 3 &&
      stack.at(-1) === 1
    ) {
      for (let i = 0; i < 4; i += 1) {
        stack.pop();
      }

      result += 1;
    }
  });

  return result;
}
