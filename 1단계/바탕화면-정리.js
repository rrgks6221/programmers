function solution(wallpaper) {
  const xList = [];
  const yList = [];

  for (let i = 0; i < wallpaper.length; i += 1) {
    for (let j = 0; j < wallpaper[i].length; j += 1) {
      if (wallpaper[i][j] !== '#') {
        continue;
      }

      xList.push(j, j + 1);
      yList.push(i, i + 1);
    }
  }

  const minX = Math.min(...xList);
  const maxX = Math.max(...xList);
  const minY = Math.min(...yList);
  const maxY = Math.max(...yList);

  return [minY, minX, maxY, maxX];
}
