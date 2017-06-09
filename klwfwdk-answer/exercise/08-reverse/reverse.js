function reverse(str) {
    let a = '';
    for (var index = 1; index <= str.length; index++) {
        a += str[str.length - index];
    }
    return a;
}

console.log(reverse("asdefg"));