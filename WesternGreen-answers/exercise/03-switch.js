/**
 * 无法处理复杂问题的代码
 */
/*
var x;//记录字符串
x = prompt("请输入一段文字");
switch (parseInt(x) % 2){//判断除2的余数
    case 0:
        console.log("偶数");
        break;
    case 1:
        console.log("奇数");
        break;
    default :
        console.log("不是整数");
        break;
}
*/

/**
 * 能处理稍微复杂问题的代码：
 */
var str;//记录字符串
str = prompt("请输入一段文字");
var arr;//记录字符串的字符
arr = str.split("");//拆分字符串
var i = 0;//用来辅助循环
var flag = "不是整数";//记录状态。初始化为不是整数。防止用户不输入
while (i < str.length){//遍历字符串
    switch (arr[i]){
        case '1':
        case '3':
        case '5':
        case '7':
        case '9':
            flag = "奇数";
            break;
        case '2':
        case '4':
        case '6':
        case '8':
        case '0':
            flag = "偶数";
            break;
        default :
            flag = "不是整数";
            i = str.length;//跳出循环
            break;
    }
    i++;
}
console.log(flag);
//看起来用if比用switch更简单些
