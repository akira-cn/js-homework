var input = Number(prompt('请输入一个数字'));
switch (input%2) {
    case 0:
        console.log('偶数');
        break;
    case 1:
        console.log('奇数');
        break;
    default:
        console.log('不是整数');
}