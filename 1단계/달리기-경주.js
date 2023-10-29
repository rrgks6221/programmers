function solution(players, callings) {
  const playerObj = {};

  for (let i = 0; i < players.length; i += 1) {
    playerObj[players[i]] = {
      i,
      front: players[i - 1] || '',
      self: players[i],
      back: players[i + 1] || '',
    };
  }

  callings.forEach((calling) => {
    const p3 = playerObj[calling];
    const p2 = playerObj[p3.front];
    const p4 = playerObj[p3.back];
    const p1 = playerObj[p2.front];

    p2.i += 1;
    p3.i -= 1;

    p2.front = p3.self;
    p3.back = p2.self;

    if (p1) {
      p1.back = p3.self;
      p3.front = p1.self;
    } else {
      p3.front = '';
    }
    if (p4) {
      p4.front = p2.self;
      p2.back = p4.self;
    } else {
      p2.back = '';
    }
  });

  return Object.values(playerObj)
    .sort((a, b) => {
      return a.i - b.i;
    })
    .map((el) => {
      return el.self;
    });
}

console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine']
  )
);
