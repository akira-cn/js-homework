function fibonacci(a) {
    a = parseInt(a);
    if (a === 1 || a === 0) {
        return a;
    } else {
        if (a === 2) {
            return 1;
        } else {
            return fibonacci(a - 1) + fibonacci(a - 2);
        }
    }
}
for (var index = 0; index < 20; index++) {
    console.log(fibonacci(index));
}