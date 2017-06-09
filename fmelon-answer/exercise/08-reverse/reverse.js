var arr = new Array();
var a = prompt('请输入字符串：');
function reverse(str){
	var temp;
	for(var i = 0, j = str.length-1; i < j; i++, j--){
		temp = str[i];
		str[i] = str[j];
		str[j] = temp;
	}
	return str;
}
var c = reverse(a.split(''));
for(var i=0 ;i< c.length;i++){
    document.write(c[i] + ' ');
}
alert("反序后的字符串"+c);