function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const user = db.find((account) => {
    return account[0] === id;
  });

  if (!user) {
    return 'fail';
  }
  if (user[1] !== pw) {
    return 'wrong pw';
  }

  return 'login';
}
