function solution(board, k) {
  let result = 0;

  for (let i = 0; i <= k; i += 1) {
    if (i >= board.length) {
      break;
    }

    for (let j = 0; j <= k; j += 1) {
      if (j >= board[i].length) {
        break;
      }
      if (i + j > k) {
        break;
      }

      result += board[i][j];
    }
  }

  return result;
}
