function solution(i, j, k) {
  let string = '';

  for (i; i <= j; i += 1) {
    string += String(i);
  }

  const regExp = new RegExp(String(k), 'g');

  return string.match(regExp)?.length || 0;
}
