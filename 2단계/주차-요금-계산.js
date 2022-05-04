function solution(fees, records) {
  const times = {};
  const result = {};

  for (let i = 0; i < records.length; i += 1) {
    records[i] = records[i].split(' ');
    result[records[i][1]] = -fees[0];

    const temp = records[i][0].split(':');

    records[i][0] = Number(temp[0] * 60) + Number(temp[1]);
  }

  records.forEach((record, idx) => {
    if (record[2] === 'IN') {
      times[record[1]] = record[0];
    } else {
      result[record[1]] += record[0] - times[record[1]];
      delete times[record[1]];
    }
  });

  for (const time in times) {
    result[time] += 1439 - times[time];
  }

  for (const car in result) {
    if (result[car] < 0) {
      result[car] = fees[1];
      continue;
    }

    result[car] = result[car] / fees[2];

    if (result[car] % 1 !== 0) {
      result[car] = parseInt(result[car]) + 1;
    }

    result[car] = result[car] * fees[3] + fees[1];
  }

  return Object.keys(result)
    .sort((a, b) => a - b)
    .map((key) => {
      return result[key];
    });
}
