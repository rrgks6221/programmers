function solution(board, skill) {
  const myBoard = [];
  let result = 0;

  for (let i = 0; i < board.length + 1; i += 1) {
    myBoard.push([]);
    for (let j = 0; j < board[0].length + 1; j += 1) {
      myBoard[i].push(0);
    }
  }

  for (let i = 0; i < skill.length; i += 1) {
    const [type, r1, r2, c1, c2, degree] = [
      skill[i][0],
      skill[i][1],
      skill[i][3],
      skill[i][2],
      skill[i][4],
      skill[i][5],
    ];

    if (type === 1) {
      myBoard[r1][c1] -= degree;
      myBoard[r1][c2 + 1] += degree;
      myBoard[r2 + 1][c1] += degree;
      myBoard[r2 + 1][c2 + 1] -= degree;
    } else {
      myBoard[r1][c1] += degree;
      myBoard[r1][c2 + 1] -= degree;
      myBoard[r2 + 1][c1] -= degree;
      myBoard[r2 + 1][c2 + 1] += degree;
    }
  }

  for (let i = 0; i < myBoard.length; i += 1) {
    let now = 0;

    for (let j = 0; j < myBoard[0].length; j += 1) {
      now += myBoard[i][j];
      myBoard[i][j] = now;
    }
  }

  for (let i = 0; i < myBoard[0].length; i += 1) {
    let now = 0;

    for (let j = 0; j < myBoard.length; j += 1) {
      now += myBoard[j][i];
      myBoard[j][i] = now;
    }
  }

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] + myBoard[i][j] > 0) result += 1;
    }
  }

  return result;
}
