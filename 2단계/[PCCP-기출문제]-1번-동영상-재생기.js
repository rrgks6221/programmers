function solution(video_len, pos, op_start, op_end, commands) {
  class Video {
    MOVE_VALUE = 10;

    videoTime;
    currentTime;
    openingStartTime;
    openingEndTime;

    constructor(props) {
      this.videoTime = this._convertTimeToSec(props.videoTime);
      this.currentTime = this._convertTimeToSec(props.currentTime);
      this.openingStartTime = this._convertTimeToSec(props.openingStartTime);
      this.openingEndTime = this._convertTimeToSec(props.openingEndTime);

      this._skipOpening();
    }

    _convertTimeToSec(time) {
      const [minutes, seconds] = time.split(':');

      return Number(minutes) * 60 + Number(seconds);
    }

    _convertSecToTime(sec) {
      const minutes = Math.floor(sec / 60);
      const seconds = sec % 60;

      return `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;
    }

    _skipOpening() {
      if (this.currentTime < this.openingStartTime) {
        return;
      }
      if (this.currentTime > this.openingEndTime) {
        return;
      }
      this.currentTime = this.openingEndTime;
    }

    moveNext() {
      const nextTime = this.currentTime + this.MOVE_VALUE;

      if (nextTime > this.videoTime) {
        this.currentTime = this.videoTime;
      } else {
        this.currentTime = nextTime;
      }

      this._skipOpening();
    }

    movePrev() {
      const prevTime = this.currentTime - this.MOVE_VALUE;

      if (prevTime < 0) {
        this.currentTime = 0;
      } else {
        this.currentTime = prevTime;
      }

      this._skipOpening();
    }

    getCurrentTime() {
      return this._convertSecToTime(this.currentTime);
    }
  }

  const video = new Video({
    videoTime: video_len,
    currentTime: pos,
    openingStartTime: op_start,
    openingEndTime: op_end,
  });

  commands.forEach((command) => {
    if (command === 'next') {
      video.moveNext();
    } else {
      video.movePrev();
    }
  });

  return video.getCurrentTime();
}
