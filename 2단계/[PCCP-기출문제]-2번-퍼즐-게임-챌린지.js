function solution(diffs, times, limit) {
  const calculateTime = (diffs, times, proficiency) => {
    const defaultProficiency = times.reduce((acc, cur) => acc + cur, 0);
    let time = defaultProficiency;

    for (let i = 1; i < diffs.length; i += 1) {
      const diff = diffs[i];
      const mistakeCount = diff - proficiency;

      if (mistakeCount <= 0) {
        continue;
      }

      time += (times[i - 1] + times[i]) * mistakeCount;
    }

    return time;
  };

  let left = 1;
  let right = limit;
  let result = 1;

  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    const time = calculateTime(diffs, times, mid);

    if (time > limit) {
      left = mid + 1;
    } else {
      result = mid;
      right = mid - 1;
    }
  }

  return result;
}
