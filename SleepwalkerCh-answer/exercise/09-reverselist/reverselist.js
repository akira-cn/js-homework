function reverselist(){
	var d=document.getElementById("name").getElementsByTagName("li");
	var a=[];
	for (var i = 0; i < d.length; i++) {
		a[d.length-i]=d[i].innerHTML;

	};
	for (var i = 0; i < d.length; i++) {
		d[i].innerHTML=a[i+1];
	};
	
}

