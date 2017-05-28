function doing(n) {
    switch (n) {
        case 1:
            return 1;
            
        case 2:
            return 1;
            
        default:
            let i = 1;
            let n1 = 1, n2 = 1, aim = 0;
            for (i = 3; i <= n; i++){
                aim = n1 + n2;
                n1 = n2;
                n2 = aim;
            }
            return aim;
    }
}

let str = prompt("请输入n(n >= 1)", "");
let n = parseInt(str);
if (n < 1) {
    alert("错误的n");
}
else {
    let int = doing(n);

    alert("数值为" + int.toString());
}    
