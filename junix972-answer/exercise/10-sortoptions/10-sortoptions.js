function atoz(){
	var sel = document.getElementById("sel").getElementsByTagName("option");
	var ops = [];
	for(var i=0; i<sel.length; i++){
		ops[i]=sel[i].innerHTML;
	};
	ops.sort();
	for(var i=0; i<sel.length; i++){
		sel[i].innerHTML=ops[i];
	};
}
function ztoa(){
	var sel = document.getElementById("sel").getElementsByTagName("option");
	var ops = [];
	for(var i=0; i<sel.length; i++){
		ops[i]=sel[i].innerHTML;
	};
	ops.sort();
	ops.reverse();
	for(var i=0; i<sel.length; i++){
		sel[i].innerHTML=ops[i];
	};
}