function isPrime(n) {

    let a = parseInt(Math.sqrt(n));

    for (var i = 2; i <= a; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
for (var i = 1; i < 10; i++) {

    console.log(isPrime(i));
}