function sortNumber(a, b) {
    return a - b
}

function getSecond(...arr) {
    arr.sort(sortNumber);
    return arr[1];
}
console.log(getSecond(1, 5, 4, 3));