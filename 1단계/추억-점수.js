function solution(name, yearning, photo) {
  const obj = {};

  for (let i = 0; i < name.length; i += 1) {
    obj[name[i]] = yearning[i];
  }

  return photo.map((el) => {
    return el.reduce((acc, cur) => {
      return acc + (obj[cur] || 0);
    }, 0);
  });
}
