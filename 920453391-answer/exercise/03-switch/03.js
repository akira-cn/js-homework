var num = prompt("请输入一个数",0);
if (isNaN(num)) alert('不是整数');
else if(parseInt(num)%2===0) console.log('偶数');
else console.log('奇数');