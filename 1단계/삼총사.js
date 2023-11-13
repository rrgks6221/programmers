function solution(numbers) {
  const getCombinations = (arr, selectNumber) => {
    const combinations = [];

    if (selectNumber === 1) {
      return arr.map((el) => [el]);
    }

    arr.forEach((el, idx, origin) => {
      const rest = origin.slice(idx + 1);

      const restCombinations = getCombinations(rest, selectNumber - 1);

      const attached = restCombinations.map((combination) => [
        el,
        ...combination,
      ]);

      combinations.push(...attached);
    });

    return combinations;
  };

  const combinations = getCombinations(numbers, 3);

  return combinations.reduce((acc, cur) => {
    const sum = cur.reduce((a, c) => {
      return a + c;
    }, 0);

    return acc + Number(sum === 0);
  }, 0);
}
