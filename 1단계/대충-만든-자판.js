function solution(keymap, targets) {
  const obj = {};

  for (let i = 0; i < keymap.length; i += 1) {
    for (let j = 0; j < keymap[i].length; j += 1) {
      const key = keymap[i][j];

      if (obj[key]) {
        obj[key].push(j + 1);
      } else {
        obj[key] = [j + 1];
      }
    }
  }

  for (const key in obj) {
    obj[key] = Math.min(...obj[key]);
  }

  return targets.map((target) => {
    let count = 0;

    for (let i = 0; i < target.length; i += 1) {
      const key = target[i];

      if (!obj[key]) {
        count = -1;
        break;
      }

      count += obj[key];
    }

    return count;
  });
}
