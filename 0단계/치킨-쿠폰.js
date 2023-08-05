function solution(chicken) {
  let answer = 0;

  while (chicken >= 10) {
    const serviceChicken = parseInt(chicken / 10);

    answer += serviceChicken;
    chicken = serviceChicken + (chicken % 10);
  }

  return answer;
}
