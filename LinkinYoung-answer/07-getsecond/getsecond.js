function getSecond (n) {
    var a1 = n[0], a2 = n[0];
    for (var i in n) {
        if (n[i] > a1) {
            a2 = a1;
            a1 = n[i];
        } else if (n[i] > a2) {
            a2 = n[i];
        }
    }
    return a2;
}

arr = [1, 0, 3, 2, 6];
console.log(getSecond(arr));