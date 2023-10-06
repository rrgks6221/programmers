function solution(s) {
  const obj = {};

  return [...s].map((el, idx) => {
    let result;

    if (obj[el] !== undefined) {
      result = idx - obj[el];
    } else {
      result = -1;
    }

    obj[el] = idx;

    return result;
  });
}
