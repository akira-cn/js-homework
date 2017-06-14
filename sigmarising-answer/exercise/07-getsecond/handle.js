function getSecond(n) {
    let len = n.length;
    if (len == 0) {
        alert("没有输入内容");
        return;
    }
    else if (len == 1) {
        alert("只输入了一个数值，所以第二大的数为" + n[0].toString());
        return;
    }
    let max1 = 0;
    let max2 = 0;
    if (n[0] < n[1]) {
        max1 = n[1];
        max2 = n[0];
    }
    else {
        max1 = n[0];
        max2 = n[1];
    }
    for (i = 2; i < len; i++){
        if (n[i] > max1) {
            max2 = max1;
            max1 = n[i];
        }
    }
    alert("第二大的数为" + max2.toString());
    return;
}

function getInput() {
    let str = prompt("请输入整数(直接点确认可终结持续输入)", "");
    let int = parseInt(str);
    if (str != "" && int != str) {
        alert("输入内容不是整数！");
        return false;
    }
    let a = [];

    while (str != "") {
        a.push(int);
        str = prompt("请输入整数(直接点确认可终结持续输入)", "");
        int = parseInt(str);
        if (str != "" && int != str) {
            alert("输入内容不是整数！");
            return false;
        }
    }

    return a;
}

let k = getInput();
if (k)
    getSecond(k);