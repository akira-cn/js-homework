function ascendingSort(){
	var s = document.getElementById("selector").options;
	var length = document.getElementById('selector').options.length;
	var ss = new Array();
	for(var i = 0; i < length; i++){
		ss[i] = s[i].text;
	}
	ss.sort(function(a,b){return a.toString().localeCompare(b)});
	for(var j = 0; j < length; j++){
		s[j].text = ss[j];
	}
}
function descendingSort(){
	var s = document.getElementById("selector").options;
	var length = document.getElementById('selector').options.length;
	var ss = new Array();
	for(var i = 0; i < length; i++){
		ss[i] = s[i].text;
	}
	ss.sort(function(a,b){return b.toString().localeCompare(a)});
	for(var j = 0; j < length; j++){
		s[j].text = ss[j];
	}
}