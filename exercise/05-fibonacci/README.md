
# 练习：斐波那契数列

实现一个函数 `fibonacci(n)`，对 n （n >= 1），返回[斐波那契数列](http://baike.so.com/doc/5389470-5626050.html) 第 n 项的结果。

function fibonacci(n){
    if(n<=0)return;
    if(n<=2)return 1;
    for(var i=3;i<=n;i++){
       [a,b]=[b,a+b];  //swap 函数
    }
    return b;
}
