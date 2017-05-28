let str = prompt("请输入字符串", "");

switch (parseInt(str, 10) == str) {
    case false:
        alert("不是整数");
        break;
    default:    
        let int = parseInt(str);    
        if (int % 2 === 0) {
            alert("偶数");
        } else {
            alert("奇数");
        }
        break;
}
