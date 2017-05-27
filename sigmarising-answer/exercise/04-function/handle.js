function themin() {
    let min = arguments[0];
    for(var i = 1;i < arguments.length; i++) 
        if (min > arguments[i]) {
            min = arguments[i];
        }
    return min;
}

let str = prompt("请输入整数(直接点确认可终结持续输入)", "");
let int = parseInt(str);
let a = [];

while (str != "") {
    a.push(int);
    str = prompt("请输入整数(直接点确认可终结持续输入)", "");
    int = parseInt(str);
}

let min = themin(...a);
alert("最小值为" + min.toString());
