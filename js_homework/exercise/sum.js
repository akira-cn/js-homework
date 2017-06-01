var input = prompt("请输入一个数字,如果要终止输入，输入0")
var int = parseInt(input);
var sum = 0;
while(int !== 0)
{
    sum += int;
    input = prompt("请输入一个数字,如果要终止输入，输入0")
    int = parseInt(input);
}
console.log(sum);