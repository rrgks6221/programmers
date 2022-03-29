function solution(s) {
  const answer = [];
  let temp = 0;

  s = s.split('},{');

  for (let i = 0; i < s.length; i += 1) {
    s[i] = s[i].replace(/{|}/g, '');
    s[i] = s[i].split(',');
  }

  s.sort((a, b) => a.length - b.length);

  for (let i = 0; i < s.length; i += 1) {
    for (let j = 0; j < s[i].length; j += 1) {
      s[i][j] = parseInt(s[i][j]);
    }
  }

  for (let i of s) {
    const sum = i.reduce((stack, el) => stack + el, 0);

    answer.push(sum - temp);
    temp = sum;
  }

  return answer;
}
