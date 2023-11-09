function solution(s) {
  let result = 0;
  let same = 0;
  let other = 0;
  let x;

  for (let i = 0; i < s.length; i += 1) {
    if (x === undefined) {
      x = s[i];
    }

    if (s[i] === x) {
      same += 1;
    } else {
      other += 1;
    }

    if (same && other && same === other) {
      same = 0;
      other = 0;
      result += 1;
      x = undefined;
    }

    if (i === s.length - 1) {
      if (same !== other) {
        result += 1;
      }
    }
  }

  return result;
}
