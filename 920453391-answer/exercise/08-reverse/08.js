function reverse(str) {
	var restr='';
	for (var i =str.length-1; i>=0; i--) {
		restr+=str[i];
	}
	return restr;
}
//测试
console.log(reverse('1234'));
console.log(reverse('li0a1ng'));