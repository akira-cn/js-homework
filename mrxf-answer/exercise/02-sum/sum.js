let newNum = null;
let sum = 0;

while (newNum != 0) {
    newNum = Number(prompt("请输入一个数字"));
    (!isNaN(newNum)) && (sum += newNum);
}

console.log(sum);
