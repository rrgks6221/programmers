function solution(my_str, n) {
  const regExp = new RegExp('\\w' + `{1,${n}}`, 'g');

  return my_str.match(regExp);
}
