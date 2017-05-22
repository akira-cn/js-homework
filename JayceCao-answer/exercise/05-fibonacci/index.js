function fabonacci(n) {
    var sum = 1, j = 0;

    for (var i=1; i <= n; i++) {
        var tmp = sum;
        sum += j;
        j = tmp;
    }

    return sum;
}
