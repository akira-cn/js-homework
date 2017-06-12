function isPrime(n) {
    if (parseInt(n, 10) != n) {
        alert("输入内容不是整数！");
        return;
    }
    if (n <= 1) {
        alert("输入数值应该>1！");
        return;
    }
    i = 0;
    for (i = 2; i <= Math.sqrt(n); i++){
        if (n % i == 0) {
            alert(n.toString() + "不是素数");
            return;
        }
    }
    alert(n.toString() + "是素数");
    return;
}

n = prompt("输入一个整数(>1)：");
isPrime(n);