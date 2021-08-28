function solution(newId) {
  //1단계
  newId = newId.toLowerCase();
  //2단계
  newId = newId.match(/[0-9a-z_.-]/g);
  if (newId === null) return "aaa";
  newId = newId.join("");
  //3단계
  newId = newId.replace(/\.+/g, ".")
  //4단계
  newId = newId.replace(/^\.|\.$/g, "");
  //5단계
  if (!/[0-9a-z_.-]/.test(newId)) return "aaa";
  //6단계
  if (newId.length > 15) {
      newId = newId.match(/[0-9a-z_.-]{15}/).join();
      return newId.replace(/\.$/, "");
  }
  //7단계
  const lastString = newId.match(/[0-9a-z_-]$/);
  while (newId.length < 3) newId += lastString;
  return newId;
}