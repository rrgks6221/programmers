function solution(picture, k) {
  const arr = [];

  for (let i = 0; i < picture.length; i += 1) {
    for (let j = 0; j < k; j += 1) {
      arr.push(picture[i]);
    }
  }

  return arr.flatMap((el) => {
    return [...el].map((e) => e.repeat(k)).join('');
  });
}
