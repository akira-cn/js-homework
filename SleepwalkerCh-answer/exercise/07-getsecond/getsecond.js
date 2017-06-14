function getsecond(a){
	var first=-2147483648;
	var second=first;
	for (var i = 0; i < a.length; i++) {
		if (a[i]>first){
			
			second=first;
			first=a[i];
		}
	}
	alert(second);

}
arr=[1,2,3,4,5,6];
getsecond(arr);