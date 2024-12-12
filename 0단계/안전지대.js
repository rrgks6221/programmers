function solution(board) {
  let answer = 0;

  const len = board.length;

  const myBoard = board.map((el) => {
    return [-1, ...el, -1];
  });

  myBoard.unshift(Array.from({ length: len + 2 }, () => -1));
  myBoard.push(Array.from({ length: len + 2 }, () => -1));

  for (let i = 1; i < len + 1; i += 1) {
    for (let j = 1; j < len + 1; j += 1) {
      if (myBoard[i][j] !== 1) {
        continue;
      }

      if (myBoard[i - 1][j - 1] !== 1) {
        myBoard[i - 1][j - 1] = 'X';
      }
      if (myBoard[i][j - 1] !== 1) {
        myBoard[i][j - 1] = 'X';
      }
      if (myBoard[i + 1][j - 1] !== 1) {
        myBoard[i + 1][j - 1] = 'X';
      }

      if (myBoard[i - 1][j] !== 1) {
        myBoard[i - 1][j] = 'X';
      }
      if (myBoard[i + 1][j] !== 1) {
        myBoard[i + 1][j] = 'X';
      }

      if (myBoard[i - 1][j + 1] !== 1) {
        myBoard[i - 1][j + 1] = 'X';
      }
      if (myBoard[i][j + 1] !== 1) {
        myBoard[i][j + 1] = 'X';
      }
      if (myBoard[i + 1][j + 1] !== 1) {
        myBoard[i + 1][j + 1] = 'X';
      }
    }
  }

  for (let i = 1; i < len + 1; i += 1) {
    for (let j = 1; j < len + 1; j += 1) {
      answer += Number(myBoard[i][j] === 0);
    }
  }

  return answer;
}
