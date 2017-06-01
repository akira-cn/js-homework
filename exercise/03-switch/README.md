
# 练习：输入类型

用户从终端或浏览器输入一段文字，如果是合法的整数，根据奇偶性输出`奇数`或`偶数`，否则输出`不是整数`。

提示：内置函数 `parseInt` 能够将一个字符串尝试转换成整数。

var input;
input=parseInt(prompt());
if(input%2==0)
console.log("奇数");
else if(input%2==1)
console.log("偶数");
else
console.log("不是整数")
