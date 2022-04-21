function solution(expression) {
  function getOrder(arr, selectNumber) {
    const orders = [];

    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getOrder(rest, selectNumber - 1);
      const attached = permutations.map((el) => [fixed, ...el]);
      orders.push(...attached);
    });

    return orders;
  }

  const result = [];
  const operators = expression.match(/\D/g);
  const numbers = expression.split(/\D/g);
  const orders = getOrder([...new Set(operators)], new Set(operators).size);

  orders.forEach((order) => {
    const operatorsCopy = [...operators];
    const numbersCopy = [...numbers];

    order.forEach((el) => {
      let idx = 0;

      while (operatorsCopy.length > idx) {
        if (operatorsCopy[idx] === el) {
          numbersCopy[idx] = eval(
            `${numbersCopy[idx]}${operatorsCopy[idx]}${numbersCopy[idx + 1]}`
          );
          numbersCopy.splice(idx + 1, 1);
          operatorsCopy.splice(idx, 1);
        } else {
          idx += 1;
        }
      }
    });
    result.push(numbersCopy[0]);
  });
  return Math.max(...result.map((el) => Math.abs(el)));
}
