function solution(grid) {
  const direction = {
    up: 0,
    down: 0,
    left: 0,
    right: 0,
  };
  const move = {
    up: {
      S: 'up',
      L: 'left',
      R: 'right',
    },
    down: {
      S: 'down',
      L: 'right',
      R: 'left',
    },
    left: {
      S: 'left',
      L: 'down',
      R: 'up',
    },
    right: {
      S: 'right',
      L: 'up',
      R: 'down',
    },
  };
  const used = [];
  let state = 'up';

  for (let i of grid) {
    for (let j of i) {
      used.push([
        {
          up: 0,
          down: 0,
          left: 0,
          right: 0,
        },
      ]);
    }
  }

  used[0][0].up = 1;

  for (let i = 0; i < grid.length; i += 1) {
    grid[i] = grid[i].split('');
  }

  while (1) {
    if (Object.values(used[0][0]).reduce((acc, cur) => acc + cur) === 4) break;
  }
}
