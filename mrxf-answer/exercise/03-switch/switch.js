const newNum = Number(prompt('请输入一个数字'));
const mod = newNum % 2;
switch (mod) {
    case 0:
        console.log('偶数');
        break;
    case 1:
        console.log('奇数');
        break;
    default:
        console.log('不是整数');
}
