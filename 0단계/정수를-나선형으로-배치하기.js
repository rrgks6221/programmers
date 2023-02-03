function solution(n) {
  class Spiral2D {
    directions = ['r', 'd', 'l', 'u'];
    direction = 'r';
    initialValue = 0;
    value = 1;
    x = 0;
    y = 0;
    arr;
    n;
    lastValue;

    constructor(n) {
      this.n = n;
      this.lastValue = n ** 2;
      this.initArray();

      this.setValue();
    }

    initArray() {
      this.arr = Array.from({ length: n }, () => {
        return Array.from({ length: n }, () => this.initialValue);
      });
      this.visitArr = Array.from({ length: n }, () => {
        return Array.from({ length: n }, () => false);
      });
    }

    increaseValue() {
      this.value += 1;
    }

    setDirection() {
      const currentIdx = this.directions.indexOf(this.direction);

      const nextCell = this.getNextCell();

      if (nextCell === undefined || nextCell !== 0) {
        this.direction =
          this.directions[(currentIdx + 1) % this.directions.length];
      }
    }

    setCoordinate() {
      if (this.direction === 'r') {
        this.x += 1;
      } else if (this.direction === 'd') {
        this.y += 1;
      } else if (this.direction === 'l') {
        this.x -= 1;
      } else if (this.direction === 'u') {
        this.y -= 1;
      }
    }

    getNextCell() {
      if (this.direction === 'r') {
        return this.arr[this.y]?.[this.x + 1];
      }
      if (this.direction === 'd') {
        return this.arr[this.y + 1]?.[this.x];
      }
      if (this.direction === 'l') {
        return this.arr[this.y]?.[this.x - 1];
      }
      if (this.direction === 'u') {
        return this.arr[this.y - 1]?.[this.x];
      }
    }

    setValue() {
      if (this.value > this.lastValue) {
        return;
      }

      this.arr[this.y][this.x] = this.value;

      this.setDirection();
      this.setCoordinate();
      this.increaseValue();
      this.setValue(this.value);
    }
  }

  const spiral2D = new Spiral2D(n);

  return spiral2D.arr;
}
