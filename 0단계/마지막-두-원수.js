function solution(num_list) {
  const last = num_list.at(-1);
  const beforeTheLast = num_list.at(-2);
  const pushNumber = last > beforeTheLast ? last - beforeTheLast : last * 2;

  num_list.push(pushNumber);

  return num_list;
}
