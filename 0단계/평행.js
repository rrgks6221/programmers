function solution(dots) {
  const getInclination = (dot1, dot2) => {
    const [x1, y1] = dot1;
    const [x2, y2] = dot2;

    return Math.abs(x2 - x1) / (y2 - y1);
  };

  const cases = [
    [dots[0], dots[1], dots[2], dots[3]],
    [dots[0], dots[2], dots[1], dots[3]],
    [dots[0], dots[3], dots[1], dots[2]],
  ];

  return Number(
    cases.some((c) => {
      return getInclination(c[0], c[1]) === getInclination(c[2], c[3]);
    })
  );
}
옹