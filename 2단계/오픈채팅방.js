function solution(record) {
  const answer = [];
  const userinfo = {};
  const userlog = { Enter: '님이 들어왔습니다.', Leave: '님이 나갔습니다.' };

  for (let i = 0; i < record.length; i += 1) {
    record[i] = record[i].split(' ');

    if (record[i][0] !== 'Leave') {
      userinfo[record[i][1]] = record[i][2];
    }
  }

  for (let i = 0; i < record.length; i += 1) {
    if (record[i][0] !== 'Change') {
      answer.push(userinfo[record[i][1]] + userlog[record[i][0]]);
    }
  }

  return answer;
}
