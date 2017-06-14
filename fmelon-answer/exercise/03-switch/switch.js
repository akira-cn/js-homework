let num = prompt("请输入字符串", "");
switch (parseInt(num) == num) {
    case false:
        alert("不是整数");
        break;
    default:
        let a = parseInt(num);
        if (a % 2 === 0) {
            alert("偶数");
        } else {
            alert("奇数");
        }
        break;
}
