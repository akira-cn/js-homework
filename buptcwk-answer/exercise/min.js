function myMin(...a) {
    let min = a[0];
    for (e of a) {
        if (e < min)
            min = e;
    }
    return min;
}