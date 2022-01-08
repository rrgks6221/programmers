function solution(s) {
  let result = '';
  s = s.split(' ').sort((a, b) => {
    return parseInt(a) - parseInt(b);
  });
  result += s[0];
  result += ' ' + s[s.length - 1];
  return result;
}
