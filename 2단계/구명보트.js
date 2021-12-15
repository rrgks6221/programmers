function solution(people, limit) {
  people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; true; i += 1) {
    if (i > j) return i;
    if (people[i] + people[j] <= limit) j -= 1;
  }
}
