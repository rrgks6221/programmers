function solution(before, after) {
  const beforeObj = {};
  const afterObj = {};

  for (let i = 0; i < before.length; i += 1) {
    if (beforeObj[before[i]]) {
      beforeObj[before[i]] += 1;
    } else {
      beforeObj[before[i]] = 1;
    }

    if (afterObj[after[i]]) {
      afterObj[after[i]] += 1;
    } else {
      afterObj[after[i]] = 1;
    }
  }

  return Number(
    Object.keys(beforeObj).every((key) => {
      return beforeObj[key] === afterObj[key];
    })
  );
}
