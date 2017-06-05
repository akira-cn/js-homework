function min(...n) {
    m = n[0];
    for (i in n) {
        if (n[i] < m) {
            m = n[i];
        }
    }
    return m;
}

a = min(3,4,12,3,5,7,9,0,-3);
console.log(a);