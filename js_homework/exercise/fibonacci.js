function fibonacci(n){
    if (n === 1 || n === 2)
        return 1;
    else
       return fibonacci(n-1)+fibonacci(n-2);
}

console.log(fibonacci(20));