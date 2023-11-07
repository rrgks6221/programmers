function solution(s, skip, index) {
  const alpas = [];

  for (let i = 97; i < 123; i += 1) {
    const asciiCode = String.fromCharCode(i);

    if (skip.includes(asciiCode)) {
      continue;
    }

    alpas.push(String.fromCharCode(i));
  }

  return s.replace(/[a-z]/g, (str) => {
    const getAlpa = (idx) => {
      return alpas[idx + index] || getAlpa(idx - alpas.length);
    };

    const idx = alpas.findIndex((el) => el === str);

    return getAlpa(idx);
  });
}
