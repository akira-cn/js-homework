/**
 * 使用了递归算法
 */

function fibonacci(n){
    if (n === 1 || n === 0)
        return 1;
    else
       return n * fibonacci(n-1);
}

//以下为测试
console.log(fibonacci(10));
