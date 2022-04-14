function solution(p) {
  let result = '';
  let open = 0;
  let close = 0;
  let bool = true;

  if (p.length === 0) return '';

  for (let i = 0; i < p.length; i += 1) {
    p[i] === '(' ? (open += 1) : (close += 1);

    if (open < close) bool = false;

    if (open === close) {
      if (bool) {
        return result + p.slice(0, i + 1) + solution(p.slice(i + 1));
      }
      result += '(' + solution(p.slice(i + 1)) + ')';

      for (let j = 1; j < i; j += 1) {
        result += p[j] === '(' ? ')' : '(';
      }

      return result;
    }
  }
}
