function solution(r1, r2) {
  let pointsCount = 0;

  for (let x = 1; x <= r2; x += 1) {
    const maxY = Math.floor(Math.sqrt(r2 * r2 - x * x));
    const minY = Math.ceil(Math.sqrt(Math.max(0, r1 * r1 - x * x)));

    pointsCount += maxY - minY + 1;
  }

  return pointsCount * 4;
}
