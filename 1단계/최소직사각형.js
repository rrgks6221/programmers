function solution(sizes) {
    let h = 0;
    let w = 0;
    
    for (const size of sizes) {
        size.sort((a, b) => b - a);
        if (h < size[0]) h = size[0];
        if (w < size[1]) w = size[1];
    }
    
    return h * w;
}
