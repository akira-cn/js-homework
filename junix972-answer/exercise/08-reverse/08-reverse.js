function reverse(str){
	var str1 = str.split(""); //在每个字符处进行分解
	var str2 = new Array();
	for(var i=str1.length-1; i>=0; i--){
		str2.push(str1[i]);
	}
    var str3 = str2.join("");
    return str3;
}

var s="";
s = prompt("Input a string:");
while(1==1){
	alert("The reversed string is:"+reverse(s));
	s = prompt("Input a string:");
}
