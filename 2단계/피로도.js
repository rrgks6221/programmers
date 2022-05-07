function solution(k, dungeons) {
  function getPermutations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });

    return results;
  }

  const permutations = getPermutations(dungeons, dungeons.length);
  const result = permutations.map((permutation) => {
    let fatigue = k;
    let cnt = 0;

    permutation.forEach((dungeons) => {
      if (fatigue >= dungeons[0]) {
        fatigue -= dungeons[1];
        cnt += 1;
      }
    });

    return cnt;
  });

  return Math.max(...result);
}
