function solution(m, n, board) {
  function getDeletePlaces() {
    const deletePlace = [];

    for (let i = 0; i < boards.length - 1; i += 1) {
      for (let j = 0; j < boards[i].length - 1; j += 1) {
        const cur = boards[i][j];

        if (cur === 0) break;
        if (cur !== boards[i][j + 1]) continue;
        if (cur !== boards[i + 1][j]) continue;
        if (cur !== boards[i + 1][j + 1]) continue;

        deletePlace.push(
          i + '_' + j,
          i + 1 + '_' + j,
          i + '_' + (j + 1),
          i + 1 + '_' + (j + 1)
        );
      }
    }

    return [...new Set(deletePlace)].map((place) => place.split('_'));
  }

  function relocate(places) {
    places.forEach((place) => (boards[place[0]][place[1]] = 0));
    boards.forEach((board, idx) => {
      boards[idx] = board.filter((el) => el !== 0);
    });

    for (let i = 0; i < n; i += 1) {
      for (let j = boards[i].length; j < m; j += 1) {
        boards[i].push(0);
      }
    }
  }

  const boards = [];
  let result = 0;

  for (let i = 0; i < n; i += 1) {
    boards.push([]);
    for (let j = m - 1; j >= 0; j -= 1) {
      boards[i].push(board[j][i]);
    }
  }

  while (1) {
    const places = getDeletePlaces();

    if (places.length === 0) return result;

    result += places.length;
    relocate(places);
  }
}
