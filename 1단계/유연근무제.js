/**
 *
 * @param {number[]} schedules @example [700, 800, 1100]
 * @param {number[][]} timelogs @example [[710, 2359, 1050, 700, 650, 631, 659], [800, 801, 805, 800, 759, 810, 809], [1105, 1001, 1002, 600, 1059, 1001, 1100]]
 * @param {number} startday @example 5
 * @returns {number} @example 3
 */
function solution(schedules, timelogs, startday) {
  class Staff {
    recognizeCheckInTime;
    beLateCounts;

    constructor(desiredCheckInTime) {
      const recognizeCheckInTotalMinutes =
        Math.floor(desiredCheckInTime / 100) * 60 +
        (desiredCheckInTime % 100) +
        10;

      this.recognizeCheckInTime = Math.floor(
        Math.floor(recognizeCheckInTotalMinutes / 60) * 100 +
          (recognizeCheckInTotalMinutes % 60)
      );
      this.beLateCounts = 0;
    }

    checkIn(checkInTime, day) {
      if (day === 6 || day === 7) {
        return;
      }

      const isLate = this.recognizeCheckInTime < checkInTime;

      if (isLate) {
        this.beLateCounts += 1;
      }
    }

    get isGoodStaff() {
      return this.beLateCounts === 0;
    }
  }

  let giftCount = 0;

  schedules.forEach((desiredCheckInTime, idx) => {
    let day = startday;
    const checkInTimes = timelogs[idx];
    const staff = new Staff(desiredCheckInTime);

    checkInTimes.forEach((checkInTime) => {
      staff.checkIn(checkInTime, day);
      day = (day % 7) + 1;
    });

    giftCount += Number(staff.isGoodStaff);
  });

  return giftCount;
}
