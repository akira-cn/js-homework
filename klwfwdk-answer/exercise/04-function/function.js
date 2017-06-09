function getmin(arr) {
    var min = arr[0];
    for (var index = 0; index < arr.length; index++) {
        if (min > arr[index]) {
            min = arr[index];
        };
    }
    return min;
}

var num = new Array(1, 5, 7, 6, 3);
console.log(getmin(num));
//document.write(getmin(num));