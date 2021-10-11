function solution(strings, n) {
    if (strings.length === 1) return strings;
    const arr = strings.sort((a, b) => {
        if (a[n] > b[n]) return 1;
        if (a[n] < b[n]) return -1;
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    })
    return arr;
}
