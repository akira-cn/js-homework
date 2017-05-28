/**
 * 使用了递归算法
 */

function fibonacci(n){
    if (n <= 0)
        return;
    if (n <= 2)
        return 1;
    else
       return n + fibonacci(n-1);
}

//以下为测试
console.log(fibonacci(10));
