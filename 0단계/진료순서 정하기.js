function solution(emergency) {
  let obj = emergency.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});
  obj = Object.keys(obj).reduce((acc, cur, idx) => {
    acc[cur] = emergency.length - idx;
    return acc;
  }, {});

  return emergency.map((el) => {
    return obj[el];
  });
}
