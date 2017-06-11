var num = Number(prompt());
if (num % 1 === 0) {
    if (num % 2 == 1) {
        document.write('奇数');
        console.log('奇数');
    } else {
        document.write('偶数');
        console.log('偶数');
    }
} else {
    document.write('不是整数');
    console.log('不是整数');
}