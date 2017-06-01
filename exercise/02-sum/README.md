
# 练习：输入数值并求和

用户在终端或浏览器上输入若干数值，对它们进行求和，当用户输入 `0` 时停止计算并输出它们的值。

提示：在浏览器上可以使用 `prompt`，node.js 中可以使用 `process.stdin` 接收用户输入。

var sum=0;
do{
    var input=parseInt(prompt());
    sum+=input;
}while(input)
console.log(sum);
