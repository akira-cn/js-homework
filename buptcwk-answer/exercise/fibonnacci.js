function fibonacci(n) {
    let sum = 0
    if (n == 1 || n == 2) {
        return 1;
    } else {
        sum = fibonacci(n - 1) + fibonacci(n - 2);
        return sum;
    }
}