function solution(polynomial) {
  return polynomial
    .split(' + ')
    .reduce(
      (acc, cur) => {
        if (cur.endsWith('x')) {
          acc[0] += Number(cur.replace('x', '')) || 1;
        } else {
          acc[1] += Number(cur);
        }

        return acc;
      },
      [0, 0]
    )
    .map((el, idx) => {
      el = String(el);

      if (idx === 1) {
        return el;
      }

      if (el === '1') {
        el = 'x';
      } else {
        el += 'x';
      }

      return el;
    })
    .filter((el) => {
      return el !== '0' && el !== '0x';
    })
    .join(' + ');
}
