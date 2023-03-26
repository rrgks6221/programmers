function solution(a, b, c, d) {
  const obj = {};

  function set(num) {
    if (obj[String(num)]) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  }

  set(a);
  set(b);
  set(c);
  set(d);

  const len = Object.keys(obj).length;

  if (len === 1) {
    return 1111 * a;
  }

  if (len === 2) {
    const [k1, k2] = Object.keys(obj);
    const [v1, v2] = Object.values(obj);

    if (v1 !== v2) {
      const threeNumber = obj[k1] === 3 ? Number(k1) : Number(k2);
      const oneNumber = obj[k1] === 1 ? Number(k1) : Number(k2);

      return (10 * threeNumber + oneNumber) ** 2;
    }

    return (Number(k1) + Number(k2)) * Math.abs(k1 - k2);
  }

  if (len === 3) {
    for (const key in obj) {
      if (obj[key] === 2) {
        delete obj[key];
      }
    }

    const [k1, k2] = Object.keys(obj);

    return k1 * k2;
  }

  return Math.min(a, b, c, d);
}
