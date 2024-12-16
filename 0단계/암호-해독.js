function solution(cipher, code) {
  let decodedCipher = '';

  for (let i = code - 1; i < cipher.length; i += code) {
    decodedCipher += cipher[i];
  }

  return decodedCipher;
}
