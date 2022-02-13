function solution(id_list, report, k) {
  const result = {};
  const reports = {};

  report = [...new Set(report)];

  for (const id of id_list) {
    result[id] = 0;
    reports[id] = 0;
  }

  for (let i = 0; i < report.length; i += 1) {
    report[i] = report[i].split(' ');
  }

  for (const r of report) {
    reports[r[1]] += 1;
  }

  report.forEach((r) => {
    if (reports[r[1]] >= k) {
      result[r[0]] += 1;
    }
  });

  return Object.values(result);
}
