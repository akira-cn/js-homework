function reverse(str) {
    if (typeof str != 'string') {
        console.log('Your input is illegal!!! Input should be a string!\n');
        process.exit(-1);
    }

    return str.split('').reverse().join('');
}
