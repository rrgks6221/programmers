function solution(my_string) {
  return my_string.replace(/[A-z]/g, (string) => {
    if (/[a-z]/.test(string)) {
      return string.toUpperCase();
    }
    return string.toLowerCase();
  });
}
