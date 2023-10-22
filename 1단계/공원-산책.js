function solution(park, routes) {
  let x = 0;
  let y = 0;
  const maxX = park[0].length - 1;
  const maxY = park.length - 1;

  for (let i = 0; i < park.length; i += 1) {
    for (let j = 0; j < park[i].length; j += 1) {
      if (park[i][j] === 'S') {
        y = i;
        x = j;
      }
    }
  }

  for (let i = 0; i < routes.length; i += 1) {
    const route = routes[i].split(' ');
    const op = route[0];
    const n = Number(route[1]);
    let isContinue = false;

    if (op === 'N') {
      if (y - n < 0) {
        continue;
      }

      for (let j = y; j >= y - n; j -= 1) {
        if (park[j]?.[x] === 'X') {
          isContinue = true;
          continue;
        }
      }

      if (isContinue) {
        continue;
      }

      y -= n;
    }

    if (op === 'S') {
      if (y + n > maxY) {
        continue;
      }

      for (let j = y; j <= y + n; j += 1) {
        if (park[j]?.[x] === 'X') {
          isContinue = true;
          continue;
        }
      }

      if (isContinue) {
        continue;
      }

      y += n;
    }

    if (op === 'W') {
      if (x - n < 0) {
        continue;
      }

      for (let j = x; j >= x - n; j -= 1) {
        if (park[y]?.[j] === 'X') {
          isContinue = true;
          break;
        }
      }

      if (isContinue) {
        continue;
      }

      x -= n;
    }

    if (op === 'E') {
      if (x + n > maxX) {
        continue;
      }

      for (let j = x; j <= x + n; j += 1) {
        if (park[y]?.[j] === 'X') {
          isContinue = true;
          break;
        }
      }

      if (isContinue) {
        continue;
      }

      x += n;
    }
  }

  return [y, x];
}
//[(2, 1)]
// ['SOO', 'OOO', 'OOO'],[('E 2', 'S 2', 'W 1')]
//[(0, 1)]
// [('SOO', 'OXX', 'OOO')],[  ('E 2', 'S 2', 'W 1')]
//[(0, 0)];
// [('OSO', 'OOO', 'OXO', 'OOO')],[('E 2', 'S 3', 'W 1')]

console.log(solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']));
console.log('-------------------------------');
console.log(solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']));
console.log('-------------------------------');
console.log(solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']));
