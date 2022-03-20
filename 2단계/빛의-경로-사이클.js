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
  const index = [0, 0];
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

  state = upMove(state);

  console.log(state);

  function upMove(state) {
    used[index[0]][index[1]].up = 1;

    if (index[0] === 0) index[0] = grid.length - 1;

    state = move[state][grid[index[0]][index[1]]];

    return state;
  }

  function downMove(state) {
    used[index[0]][index[1]].down = 1;

    if (index[1] === grid.length - 1) index[1] = 0;

    state = move[state][grid[index[0]][index[1]]];

    return state;
  } // 여기까지 함

  function leftMove(state) {
    used[index[0]][index[1]].left = 1;

    if (index[0] === 0) index[0] = grid.length - 1;

    state = move[state][grid[index[0]][index[1]]];

    return state;
  }

  function rightMove(state) {
    used[index[0]][index[1]].right = 1;

    if (index[0] === 0) index[0] = grid.length - 1;

    state = move[state][grid[index[0]][index[1]]];

    return state;
  }
}

solution(['SL', 'LR']);
