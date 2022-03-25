function solution(clothes) {
  const obj = {};

  clothes.forEach((cloth) => {
    if (obj.hasOwnProperty(cloth[1])) obj[cloth[1]] += 1;
    else obj[cloth[1]] = 2;
  });

  return Object.values(obj).reduce((acc, cur) => (acc *= cur), 1) - 1;
}
