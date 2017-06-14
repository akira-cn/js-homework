function reverse(st){
	var newst=[];
	for (var i = 0; i < st.length; i++) {
		newst[st.length-i]=st[i];
	};
	newst=newst.join('');
	alert(newst);
}
str='abcde';
reverse(str);