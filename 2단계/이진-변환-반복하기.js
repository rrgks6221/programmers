function solution(s) {
  const result = [0, 0];

  while (s !== '1') {
    let str = '';

    for (let i = 0; i < s.length; i += 1) {
      if (s[i] === '1') str += '1';
      else result[1] += 1;
    }

    s = str.length.toString(2);
    result[0] += 1;
  }

  return result;
}
