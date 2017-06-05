function isPrime (n) {
    m = Math.floor(Math.sqrt(n));
    i = 2;
    for (i = 2; i <= m; i++) {
        if (n % i == 0) {
            break;
        }
    }
    if (i > m) {
        return true;
    } else {
        return false;
    }
}

console.log(isPrime(233));