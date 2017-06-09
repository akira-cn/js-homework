function asc(){
	var d=document.getElementById("name").getElementsByTagName("option");
	var a=[];
	for (var i = 0; i < d.length; i++) {
		a[i]=d[i].innerHTML;
	};
	a.sort();
	for (var i = 0; i < d.length; i++) {
		d[i].innerHTML=a[i];
	};
}
function desc(){
	var d=document.getElementById("name").getElementsByTagName("option");
	var a=[];
	for (var i = 0; i < d.length; i++) {
		a[i]=d[i].innerHTML;
	};
	a.sort();
	for (var i = 0; i < d.length; i++) {
		d[i].innerHTML=a[d.length-i-1];
	};
}