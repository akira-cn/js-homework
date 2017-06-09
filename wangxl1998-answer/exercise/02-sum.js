let num = prompt("请输入一个数字(以0终止)","0")
let int = parseInt(num);
let sum = 0;
while(int !== 0){
    sum += int;
    num = prompt("请输入一个数字(以0终止)","0")
    int = parseInt(num);
}
console.log(sum);
alert("全部求和为："+sum.toString());
