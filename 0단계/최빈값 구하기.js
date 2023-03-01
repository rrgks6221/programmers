function solution(array) {
  const obj = {};
  let modeCount = 0;
  let mode;

  array.forEach((el) => {
    if (obj[el] === undefined) {
      obj[el] = 0;

      return;
    }

    obj[el] += 1;
  });

  let maxCount = Math.max(...Object.values(obj));

  for (const key in obj) {
    if (obj[key] === maxCount) {
      modeCount += 1;
      mode = Number(key);
    }
  }

  return modeCount === 1 ? mode : -1;
}
