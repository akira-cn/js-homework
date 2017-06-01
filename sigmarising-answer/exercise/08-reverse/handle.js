function reverse(str) {
    let a = [];
    for (let i = str.length - 1; i >= 0; i--){
        a.push(str[i])
    }
    return a;
}

let str = prompt("请输入字符串:");
alert("字符串逆序后为:" + reverse(str).join(""));