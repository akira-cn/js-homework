function reverselist(){
	var ul = document.getElementById("list");
	var lis = document.getElementsByTagName("li");
	var newlis = new Array();
	var newul = document.getElementById("new");
	for (var i = lis.length - 1; i >= 0; i--){
		newlis.push(lis[i]);
	}
	for (var x = 0; x < newlis.length; x++){
		newul.appendChild(newlis[x]);
	}
}