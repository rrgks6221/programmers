function solution(a, b) {
  const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        dayOfTheWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let result = b - 1;
  for (let i = 0; i < a; i++) {
      result += month[i];
  }
  return dayOfTheWeek[result % 7];
}