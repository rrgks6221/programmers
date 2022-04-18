function solution(word) {
  function permutation(arr, selectNum) {
    const result = [];

    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, _, arr) => {
      const fixed = v;
      const restArr = arr;
      const permutationArr = permutation(restArr, selectNum - 1);
      const combineFix = permutationArr.map((v) => [fixed, ...v]);
      result.push(...combineFix);
    });

    return result;
  }

  const result = [];

  for (let i = 1; i < 6; i += 1) {
    const words = permutation(['A', 'E', 'I', 'O', 'U'], i);

    words.forEach((el) => result.push(el.join('')));
  }

  return result.sort().indexOf(word) + 1;
}
