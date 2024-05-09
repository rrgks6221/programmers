function solution(my_string) {
  return Function('return ' + my_string)();
}
