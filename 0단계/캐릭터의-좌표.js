function solution(keyinput, board) {
  class Board {
    maxCoordinate;
    currentCoordinate;

    constructor(width, height) {
      this.maxCoordinate = {
        up: parseInt(height / 2),
        down: parseInt(-(height / 2)),
        right: parseInt(width / 2),
        left: parseInt(-(width / 2)),
      };
      this.currentCoordinate = [0, 0];
    }

    up() {
      if (this.isEscape('up')) {
        return;
      }
      this.currentCoordinate[1] += 1;
    }

    down() {
      if (this.isEscape('down')) {
        return;
      }
      this.currentCoordinate[1] -= 1;
    }

    right() {
      if (this.isEscape('right')) {
        return;
      }
      this.currentCoordinate[0] += 1;
    }

    left() {
      if (this.isEscape('left')) {
        return;
      }
      this.currentCoordinate[0] -= 1;
    }

    isEscape(action) {
      if (action === 'up') {
        return this.currentCoordinate[1] === this.maxCoordinate.up;
      }

      if (action === 'down') {
        return this.currentCoordinate[1] === this.maxCoordinate.down;
      }

      if (action === 'right') {
        return this.currentCoordinate[0] === this.maxCoordinate.right;
      }

      if (action === 'left') {
        return this.currentCoordinate[0] === this.maxCoordinate.left;
      }
    }
  }

  const myBoard = new Board(board[0], board[1]);

  keyinput.forEach((action) => {
    myBoard[action]();
  });

  return myBoard.currentCoordinate;
}
