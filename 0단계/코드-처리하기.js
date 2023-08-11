function solution(code) {
  let result = '';
  let mode = 0;

  for (let i = 0; i < code.length; i += 1) {
    if (code[i] === '1') {
      mode = Number(!mode);

      continue;
    }

    if (i % 2 === mode) {
      result += code[i];
    }
  }

  return result || 'EMPTY';
}
