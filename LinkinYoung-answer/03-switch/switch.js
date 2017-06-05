a = prompt("输入一个数");
a = parseInt(a);
if (!isNaN(a)) {
    if (a % 2) {
        alert("奇数");
    } else {
        alert("偶数");
    }
} else {
    alert("不是整数");
}