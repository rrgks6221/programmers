function solution(s) {
  const result = [];

  for (let i = 1; i <= s.length / 2; i += 1) {
    const str = [];
    let myStr = '';
    let idx = 0;

    for (let j = 0; j < s.length; j += i) {
      str.push([s.substring(j, j + i), 1]);
    }

    for (let j = idx; j < str.length - 1; j += 1) {
      if (str[j][0] === str[j + 1][0]) {
        str[idx][1] += 1;
        str[j + 1][1] = 0;
      } else {
        idx = j + 1;
        continue;
      }
    }

    for (let j = 0; j < str.length; j += 1) {
      if (str[j][1] === 1) {
        myStr += str[j][0];
      }
      if (str[j][1] > 1) {
        myStr += str[j][1] + str[j][0];
      }
    }
    result.push(myStr.length);
  }

  return result.length === 0 ? s.length : Math.min(...result);
}
