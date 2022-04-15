function solution(line) {
  const coordinates = [];

  for (let i = 0; i < line.length; i += 1) {
    for (let j = i + 1; j < line.length; j += 1) {
      const denominator = line[i][0] * line[j][1] - line[i][1] * line[j][0];
      const x =
        (line[i][1] * line[j][2] - line[i][2] * line[j][1]) / denominator;
      const y =
        (line[i][2] * line[j][0] - line[i][0] * line[j][2]) / denominator;

      if (denominator === 0) continue;

      coordinates.push(x + '_' + y);
    }
  }

  const intCoordinates = [...new Set(coordinates)]
    .map((intCoordinate) => intCoordinate.split('_'))
    .filter((intCoordinate) => {
      return (
        Number.isInteger(+intCoordinate[0]) &&
        Number.isInteger(+intCoordinate[1])
      );
    })
    .map((intCoordinate) => [+intCoordinate[0], +intCoordinate[1]]);
  const xMax = intCoordinates.reduce((acc, cur) => {
    return Math.max(acc, cur[0]);
  }, -Infinity);
  const yMax = intCoordinates.reduce((acc, cur) => {
    return Math.max(acc, cur[1]);
  }, -Infinity);
  const xMin = intCoordinates.reduce((acc, cur) => {
    return Math.min(acc, cur[0]);
  }, Infinity);
  const yMin = intCoordinates.reduce((acc, cur) => {
    return Math.min(acc, cur[1]);
  }, Infinity);
  const result = Array.from(Array(Math.abs(yMin - yMax) + 1), () => {
    return Array(Math.abs(xMin - xMax) + 1).fill('.');
  });

  intCoordinates.forEach((intCoordinate) => {
    result[Math.abs(intCoordinate[1] - yMax)][intCoordinate[0] - xMin] = '*';
  });

  return result.map((el) => el.join(''));
}
