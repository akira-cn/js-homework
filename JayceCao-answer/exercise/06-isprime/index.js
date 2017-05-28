function isPrime(n) {
    if ( n <= 1) {
        console.log('Your input is illegal. Input a number greater than 1\n');
        process.exit(-1);
    }

    let flag = 0;
    for (var i=2; i <= n / 2; i++) {
        if (n % i == 0)
            flag = 1;
    }

    return flag == 0 ? true : false;
}
