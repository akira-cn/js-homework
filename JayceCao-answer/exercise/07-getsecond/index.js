function getSecond(n) {
    if (!Array.isArray(n)) {
        console.log('Your input is illegal!!!. Input should be an array!!!\n');
        process.exit(-1);
    }

    let max = n[0], sec_max = n[1];
    for (let i = 0; i < n.length; i++) {
        if (n[i] >= max) {
            sec_max = max;
            max = n[i];
        }
    }
    return sec_max;
}
