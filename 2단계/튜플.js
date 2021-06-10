function solution(s) {
    const answer = [];
    let temp = 0;
    s = s.split("},{");
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].replace(/{|}/g, "");
        s[i] = s[i].split(",");
    }
    s.sort((a, b) => {
        return a.length - b.length;
    })
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) s[i][j] = parseInt(s[i][j]);
    }
    for (let i of s) {
        let sum = i.reduce((stack, el) => {
        return stack + el;
        }, 0);
        answer.push(sum - temp);
        temp = sum;
    }
    return answer;
}